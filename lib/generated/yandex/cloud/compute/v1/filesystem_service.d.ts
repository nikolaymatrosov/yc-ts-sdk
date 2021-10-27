/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Filesystem } from '../../../../yandex/cloud/compute/v1/filesystem';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.compute.v1";
export interface GetFilesystemRequest {
    $type: 'yandex.cloud.compute.v1.GetFilesystemRequest';
    /**
     * ID of the filesystem to return.
     *
     * To get the filesystem ID, make a [FilesystemService.List] request.
     */
    filesystemId: string;
}
export interface ListFilesystemsRequest {
    $type: 'yandex.cloud.compute.v1.ListFilesystemsRequest';
    /**
     * ID of the folder to list filesystems in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`,
     * the service returns a [ListFilesystemsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListFilesystemsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters filesystems listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [Filesystem.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z]([-a-z0-9]{,61}[a-z0-9])?$`.
     * Example of a filter: `name=my-filesystem`.
     */
    filter: string;
}
export interface ListFilesystemsResponse {
    $type: 'yandex.cloud.compute.v1.ListFilesystemsResponse';
    /** List of filesystems in the specified folder. */
    filesystems: Filesystem[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListFilesystemsRequest.page_size], use `next_page_token` as the value
     * for the [ListFilesystemsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateFilesystemRequest {
    $type: 'yandex.cloud.compute.v1.CreateFilesystemRequest';
    /**
     * ID of the folder to create a filesystem in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the filesystem. The name must be unique within the folder. */
    name: string;
    /** Description of the filesystem. */
    description: string;
    /**
     * Filesystem labels as `key:value` pairs.
     * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
     */
    labels: {
        [key: string]: string;
    };
    /**
     * ID of the filesystem type.
     *
     * To get a list of available filesystem types, make a [yandex.cloud.compute.v1.DiskTypeService.List] request.
     *
     * The filesystem type cannot be updated after the filesystem creation.
     */
    typeId: string;
    /**
     * ID of the availability zone where the filesystem resides.
     *
     * To get a list of available zones, make a [yandex.cloud.compute.v1.ZoneService.List] request.
     *
     * A filesystem can be attached only to virtual machines residing in the same availability zone.
     * The filesystem availability zone cannot be updated after the filesystem creation.
     */
    zoneId: string;
    /**
     * Size of the filesystem, specified in bytes.
     *
     * The size of the filesystem cannot be updated after the filesystem creation.
     */
    size: number;
    /**
     * Block size used for the filesystem, specified in bytes.
     *
     * The block size cannot be updated after the filesystem creation.
     *
     * Default value: 4096.
     */
    blockSize: number;
}
export interface CreateFilesystemRequest_LabelsEntry {
    $type: 'yandex.cloud.compute.v1.CreateFilesystemRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface CreateFilesystemMetadata {
    $type: 'yandex.cloud.compute.v1.CreateFilesystemMetadata';
    /** ID of the filesystem that is being created. */
    filesystemId: string;
}
export interface UpdateFilesystemRequest {
    $type: 'yandex.cloud.compute.v1.UpdateFilesystemRequest';
    /**
     * ID of the filesystem to update.
     *
     * To get the filesystem ID, make a [FilesystemService.List] request.
     */
    filesystemId: string;
    /** Field mask that specifies which attributes of the filesystem should be updated. */
    updateMask: FieldMask | undefined;
    /** New name of the filesystem. The name must be unique within the folder. */
    name: string;
    /** New description of the filesystem. */
    description: string;
    /**
     * New filesystem labels as `key:value` pairs.
     * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
     *
     * Existing set of labels is completely replaced by the provided set, so if you just want
     * to add or remove a label:
     * 1. Get the current set of labels with a [FilesystemService.Get] request.
     * 2. Add or remove a label in this set.
     * 3. Send the new set in this field.
     */
    labels: {
        [key: string]: string;
    };
}
export interface UpdateFilesystemRequest_LabelsEntry {
    $type: 'yandex.cloud.compute.v1.UpdateFilesystemRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface UpdateFilesystemMetadata {
    $type: 'yandex.cloud.compute.v1.UpdateFilesystemMetadata';
    /** ID of the filesystem that is being updated. */
    filesystemId: string;
}
export interface DeleteFilesystemRequest {
    $type: 'yandex.cloud.compute.v1.DeleteFilesystemRequest';
    /**
     * ID of the filesystem to delete.
     *
     * To get the filesystem ID, make a [FilesystemService.List] request.
     */
    filesystemId: string;
}
export interface DeleteFilesystemMetadata {
    $type: 'yandex.cloud.compute.v1.DeleteFilesystemMetadata';
    /** ID of the filesystem that is being deleted. */
    filesystemId: string;
}
export interface ListFilesystemOperationsRequest {
    $type: 'yandex.cloud.compute.v1.ListFilesystemOperationsRequest';
    /**
     * ID of the filesystem to list operations for.
     *
     * To get the filesystem ID, make a [FilesystemService.List] request.
     */
    filesystemId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListFilesystemOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListFilesystemOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListFilesystemOperationsResponse {
    $type: 'yandex.cloud.compute.v1.ListFilesystemOperationsResponse';
    /** List of operations for the specified filesystem. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListFilesystemOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListFilesystemOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetFilesystemRequest: {
    $type: "yandex.cloud.compute.v1.GetFilesystemRequest";
    encode(message: GetFilesystemRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetFilesystemRequest;
    fromJSON(object: any): GetFilesystemRequest;
    toJSON(message: GetFilesystemRequest): unknown;
    fromPartial(object: DeepPartial<GetFilesystemRequest>): GetFilesystemRequest;
};
export declare const ListFilesystemsRequest: {
    $type: "yandex.cloud.compute.v1.ListFilesystemsRequest";
    encode(message: ListFilesystemsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFilesystemsRequest;
    fromJSON(object: any): ListFilesystemsRequest;
    toJSON(message: ListFilesystemsRequest): unknown;
    fromPartial(object: DeepPartial<ListFilesystemsRequest>): ListFilesystemsRequest;
};
export declare const ListFilesystemsResponse: {
    $type: "yandex.cloud.compute.v1.ListFilesystemsResponse";
    encode(message: ListFilesystemsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFilesystemsResponse;
    fromJSON(object: any): ListFilesystemsResponse;
    toJSON(message: ListFilesystemsResponse): unknown;
    fromPartial(object: DeepPartial<ListFilesystemsResponse>): ListFilesystemsResponse;
};
export declare const CreateFilesystemRequest: {
    $type: "yandex.cloud.compute.v1.CreateFilesystemRequest";
    encode(message: CreateFilesystemRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFilesystemRequest;
    fromJSON(object: any): CreateFilesystemRequest;
    toJSON(message: CreateFilesystemRequest): unknown;
    fromPartial(object: DeepPartial<CreateFilesystemRequest>): CreateFilesystemRequest;
};
export declare const CreateFilesystemRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.CreateFilesystemRequest.LabelsEntry";
    encode(message: CreateFilesystemRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFilesystemRequest_LabelsEntry;
    fromJSON(object: any): CreateFilesystemRequest_LabelsEntry;
    toJSON(message: CreateFilesystemRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateFilesystemRequest_LabelsEntry>): CreateFilesystemRequest_LabelsEntry;
};
export declare const CreateFilesystemMetadata: {
    $type: "yandex.cloud.compute.v1.CreateFilesystemMetadata";
    encode(message: CreateFilesystemMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateFilesystemMetadata;
    fromJSON(object: any): CreateFilesystemMetadata;
    toJSON(message: CreateFilesystemMetadata): unknown;
    fromPartial(object: DeepPartial<CreateFilesystemMetadata>): CreateFilesystemMetadata;
};
export declare const UpdateFilesystemRequest: {
    $type: "yandex.cloud.compute.v1.UpdateFilesystemRequest";
    encode(message: UpdateFilesystemRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateFilesystemRequest;
    fromJSON(object: any): UpdateFilesystemRequest;
    toJSON(message: UpdateFilesystemRequest): unknown;
    fromPartial(object: DeepPartial<UpdateFilesystemRequest>): UpdateFilesystemRequest;
};
export declare const UpdateFilesystemRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.UpdateFilesystemRequest.LabelsEntry";
    encode(message: UpdateFilesystemRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateFilesystemRequest_LabelsEntry;
    fromJSON(object: any): UpdateFilesystemRequest_LabelsEntry;
    toJSON(message: UpdateFilesystemRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateFilesystemRequest_LabelsEntry>): UpdateFilesystemRequest_LabelsEntry;
};
export declare const UpdateFilesystemMetadata: {
    $type: "yandex.cloud.compute.v1.UpdateFilesystemMetadata";
    encode(message: UpdateFilesystemMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateFilesystemMetadata;
    fromJSON(object: any): UpdateFilesystemMetadata;
    toJSON(message: UpdateFilesystemMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateFilesystemMetadata>): UpdateFilesystemMetadata;
};
export declare const DeleteFilesystemRequest: {
    $type: "yandex.cloud.compute.v1.DeleteFilesystemRequest";
    encode(message: DeleteFilesystemRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteFilesystemRequest;
    fromJSON(object: any): DeleteFilesystemRequest;
    toJSON(message: DeleteFilesystemRequest): unknown;
    fromPartial(object: DeepPartial<DeleteFilesystemRequest>): DeleteFilesystemRequest;
};
export declare const DeleteFilesystemMetadata: {
    $type: "yandex.cloud.compute.v1.DeleteFilesystemMetadata";
    encode(message: DeleteFilesystemMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteFilesystemMetadata;
    fromJSON(object: any): DeleteFilesystemMetadata;
    toJSON(message: DeleteFilesystemMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteFilesystemMetadata>): DeleteFilesystemMetadata;
};
export declare const ListFilesystemOperationsRequest: {
    $type: "yandex.cloud.compute.v1.ListFilesystemOperationsRequest";
    encode(message: ListFilesystemOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFilesystemOperationsRequest;
    fromJSON(object: any): ListFilesystemOperationsRequest;
    toJSON(message: ListFilesystemOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListFilesystemOperationsRequest>): ListFilesystemOperationsRequest;
};
export declare const ListFilesystemOperationsResponse: {
    $type: "yandex.cloud.compute.v1.ListFilesystemOperationsResponse";
    encode(message: ListFilesystemOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListFilesystemOperationsResponse;
    fromJSON(object: any): ListFilesystemOperationsResponse;
    toJSON(message: ListFilesystemOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListFilesystemOperationsResponse>): ListFilesystemOperationsResponse;
};
/** A set of methods for managing filesystems. */
export declare const FilesystemServiceService: {
    /**
     * Returns the specified filesystem.
     *
     * To get the list of available filesystems, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.compute.v1.FilesystemService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetFilesystemRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetFilesystemRequest;
        readonly responseSerialize: (value: Filesystem) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Filesystem;
    };
    /** Lists filesystems in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.compute.v1.FilesystemService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListFilesystemsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListFilesystemsRequest;
        readonly responseSerialize: (value: ListFilesystemsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListFilesystemsResponse;
    };
    /** Creates a filesystem in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.compute.v1.FilesystemService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateFilesystemRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateFilesystemRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified filesystem. */
    readonly update: {
        readonly path: "/yandex.cloud.compute.v1.FilesystemService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateFilesystemRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateFilesystemRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Deletes the specified filesystem.
     *
     * Deleting a filesystem removes its data permanently and is irreversible.
     *
     * It is not possible to delete a filesystem that is attached to an instance.
     */
    readonly delete: {
        readonly path: "/yandex.cloud.compute.v1.FilesystemService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteFilesystemRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteFilesystemRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified filesystem. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.compute.v1.FilesystemService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListFilesystemOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListFilesystemOperationsRequest;
        readonly responseSerialize: (value: ListFilesystemOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListFilesystemOperationsResponse;
    };
};
export interface FilesystemServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified filesystem.
     *
     * To get the list of available filesystems, make a [List] request.
     */
    get: handleUnaryCall<GetFilesystemRequest, Filesystem>;
    /** Lists filesystems in the specified folder. */
    list: handleUnaryCall<ListFilesystemsRequest, ListFilesystemsResponse>;
    /** Creates a filesystem in the specified folder. */
    create: handleUnaryCall<CreateFilesystemRequest, Operation>;
    /** Updates the specified filesystem. */
    update: handleUnaryCall<UpdateFilesystemRequest, Operation>;
    /**
     * Deletes the specified filesystem.
     *
     * Deleting a filesystem removes its data permanently and is irreversible.
     *
     * It is not possible to delete a filesystem that is attached to an instance.
     */
    delete: handleUnaryCall<DeleteFilesystemRequest, Operation>;
    /** Lists operations for the specified filesystem. */
    listOperations: handleUnaryCall<ListFilesystemOperationsRequest, ListFilesystemOperationsResponse>;
}
export interface FilesystemServiceClient extends Client {
    /**
     * Returns the specified filesystem.
     *
     * To get the list of available filesystems, make a [List] request.
     */
    get(request: GetFilesystemRequest, callback: (error: ServiceError | null, response: Filesystem) => void): ClientUnaryCall;
    get(request: GetFilesystemRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Filesystem) => void): ClientUnaryCall;
    get(request: GetFilesystemRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Filesystem) => void): ClientUnaryCall;
    /** Lists filesystems in the specified folder. */
    list(request: ListFilesystemsRequest, callback: (error: ServiceError | null, response: ListFilesystemsResponse) => void): ClientUnaryCall;
    list(request: ListFilesystemsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListFilesystemsResponse) => void): ClientUnaryCall;
    list(request: ListFilesystemsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListFilesystemsResponse) => void): ClientUnaryCall;
    /** Creates a filesystem in the specified folder. */
    create(request: CreateFilesystemRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateFilesystemRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateFilesystemRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified filesystem. */
    update(request: UpdateFilesystemRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateFilesystemRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateFilesystemRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Deletes the specified filesystem.
     *
     * Deleting a filesystem removes its data permanently and is irreversible.
     *
     * It is not possible to delete a filesystem that is attached to an instance.
     */
    delete(request: DeleteFilesystemRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteFilesystemRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteFilesystemRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified filesystem. */
    listOperations(request: ListFilesystemOperationsRequest, callback: (error: ServiceError | null, response: ListFilesystemOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListFilesystemOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListFilesystemOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListFilesystemOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListFilesystemOperationsResponse) => void): ClientUnaryCall;
}
export declare const FilesystemServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => FilesystemServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
