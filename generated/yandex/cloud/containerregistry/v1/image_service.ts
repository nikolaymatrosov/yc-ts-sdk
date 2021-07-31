/* eslint-disable */
import { Image } from '../../../../yandex/cloud/containerregistry/v1/image';
import { Operation } from '../../../../yandex/cloud/operation/operation';
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

export const protobufPackage = 'yandex.cloud.containerregistry.v1';

export interface ListImagesRequest {
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
    /**
     * ID of the Docker image resource to return.
     *
     * To get the Docker image ID use a [ImageService.List] request.
     */
    imageId: string;
}

export interface DeleteImageRequest {
    /**
     * ID of the Docker image to delete.
     *
     * To get Docker image ID use a [ImageService.List] request.
     */
    imageId: string;
}

export interface DeleteImageMetadata {
    /** ID of the Docker image that is being deleted. */
    imageId: string;
}

const baseListImagesRequest: object = {
    registryId: '',
    repositoryName: '',
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
    orderBy: '',
};

export const ListImagesRequest = {
    encode(
        message: ListImagesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.repositoryName !== '') {
            writer.uint32(18).string(message.repositoryName);
        }
        if (message.folderId !== '') {
            writer.uint32(58).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(34).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(42).string(message.filter);
        }
        if (message.orderBy !== '') {
            writer.uint32(50).string(message.orderBy);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListImagesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListImagesRequest } as ListImagesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.repositoryName = reader.string();
                    break;
                case 7:
                    message.folderId = reader.string();
                    break;
                case 3:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 4:
                    message.pageToken = reader.string();
                    break;
                case 5:
                    message.filter = reader.string();
                    break;
                case 6:
                    message.orderBy = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListImagesRequest {
        const message = { ...baseListImagesRequest } as ListImagesRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = '';
        }
        if (
            object.repositoryName !== undefined &&
            object.repositoryName !== null
        ) {
            message.repositoryName = String(object.repositoryName);
        } else {
            message.repositoryName = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = Number(object.pageSize);
        } else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = String(object.pageToken);
        } else {
            message.pageToken = '';
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = String(object.filter);
        } else {
            message.filter = '';
        }
        if (object.orderBy !== undefined && object.orderBy !== null) {
            message.orderBy = String(object.orderBy);
        } else {
            message.orderBy = '';
        }
        return message;
    },

    toJSON(message: ListImagesRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.repositoryName !== undefined &&
            (obj.repositoryName = message.repositoryName);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },

    fromPartial(object: DeepPartial<ListImagesRequest>): ListImagesRequest {
        const message = { ...baseListImagesRequest } as ListImagesRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = '';
        }
        if (
            object.repositoryName !== undefined &&
            object.repositoryName !== null
        ) {
            message.repositoryName = object.repositoryName;
        } else {
            message.repositoryName = '';
        }
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = object.pageSize;
        } else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = object.pageToken;
        } else {
            message.pageToken = '';
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = object.filter;
        } else {
            message.filter = '';
        }
        if (object.orderBy !== undefined && object.orderBy !== null) {
            message.orderBy = object.orderBy;
        } else {
            message.orderBy = '';
        }
        return message;
    },
};

const baseListImagesResponse: object = { nextPageToken: '' };

export const ListImagesResponse = {
    encode(
        message: ListImagesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.images) {
            Image.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListImagesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListImagesResponse } as ListImagesResponse;
        message.images = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.images.push(Image.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListImagesResponse {
        const message = { ...baseListImagesResponse } as ListImagesResponse;
        message.images = [];
        if (object.images !== undefined && object.images !== null) {
            for (const e of object.images) {
                message.images.push(Image.fromJSON(e));
            }
        }
        if (
            object.nextPageToken !== undefined &&
            object.nextPageToken !== null
        ) {
            message.nextPageToken = String(object.nextPageToken);
        } else {
            message.nextPageToken = '';
        }
        return message;
    },

    toJSON(message: ListImagesResponse): unknown {
        const obj: any = {};
        if (message.images) {
            obj.images = message.images.map((e) =>
                e ? Image.toJSON(e) : undefined
            );
        } else {
            obj.images = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(object: DeepPartial<ListImagesResponse>): ListImagesResponse {
        const message = { ...baseListImagesResponse } as ListImagesResponse;
        message.images = [];
        if (object.images !== undefined && object.images !== null) {
            for (const e of object.images) {
                message.images.push(Image.fromPartial(e));
            }
        }
        if (
            object.nextPageToken !== undefined &&
            object.nextPageToken !== null
        ) {
            message.nextPageToken = object.nextPageToken;
        } else {
            message.nextPageToken = '';
        }
        return message;
    },
};

const baseGetImageRequest: object = { imageId: '' };

export const GetImageRequest = {
    encode(
        message: GetImageRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetImageRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetImageRequest } as GetImageRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetImageRequest {
        const message = { ...baseGetImageRequest } as GetImageRequest;
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = String(object.imageId);
        } else {
            message.imageId = '';
        }
        return message;
    },

    toJSON(message: GetImageRequest): unknown {
        const obj: any = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },

    fromPartial(object: DeepPartial<GetImageRequest>): GetImageRequest {
        const message = { ...baseGetImageRequest } as GetImageRequest;
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = object.imageId;
        } else {
            message.imageId = '';
        }
        return message;
    },
};

const baseDeleteImageRequest: object = { imageId: '' };

export const DeleteImageRequest = {
    encode(
        message: DeleteImageRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteImageRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteImageRequest } as DeleteImageRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteImageRequest {
        const message = { ...baseDeleteImageRequest } as DeleteImageRequest;
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = String(object.imageId);
        } else {
            message.imageId = '';
        }
        return message;
    },

    toJSON(message: DeleteImageRequest): unknown {
        const obj: any = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },

    fromPartial(object: DeepPartial<DeleteImageRequest>): DeleteImageRequest {
        const message = { ...baseDeleteImageRequest } as DeleteImageRequest;
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = object.imageId;
        } else {
            message.imageId = '';
        }
        return message;
    },
};

const baseDeleteImageMetadata: object = { imageId: '' };

export const DeleteImageMetadata = {
    encode(
        message: DeleteImageMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.imageId !== '') {
            writer.uint32(10).string(message.imageId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteImageMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteImageMetadata } as DeleteImageMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteImageMetadata {
        const message = { ...baseDeleteImageMetadata } as DeleteImageMetadata;
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = String(object.imageId);
        } else {
            message.imageId = '';
        }
        return message;
    },

    toJSON(message: DeleteImageMetadata): unknown {
        const obj: any = {};
        message.imageId !== undefined && (obj.imageId = message.imageId);
        return obj;
    },

    fromPartial(object: DeepPartial<DeleteImageMetadata>): DeleteImageMetadata {
        const message = { ...baseDeleteImageMetadata } as DeleteImageMetadata;
        if (object.imageId !== undefined && object.imageId !== null) {
            message.imageId = object.imageId;
        } else {
            message.imageId = '';
        }
        return message;
    },
};

/** A set of methods for managing Image resources. */
export const ImageServiceService = {
    /** Retrieves the list of Image resources in the specified registry or repository. */
    list: {
        path: '/yandex.cloud.containerregistry.v1.ImageService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListImagesRequest) =>
            Buffer.from(ListImagesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListImagesRequest.decode(value),
        responseSerialize: (value: ListImagesResponse) =>
            Buffer.from(ListImagesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListImagesResponse.decode(value),
    },
    /**
     * Returns the specified Image resource.
     *
     * To get the list of available Image resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.containerregistry.v1.ImageService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetImageRequest) =>
            Buffer.from(GetImageRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetImageRequest.decode(value),
        responseSerialize: (value: Image) =>
            Buffer.from(Image.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Image.decode(value),
    },
    /** Deletes the specified Docker image. */
    delete: {
        path: '/yandex.cloud.containerregistry.v1.ImageService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteImageRequest) =>
            Buffer.from(DeleteImageRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => DeleteImageRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

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
    list(
        request: ListImagesRequest,
        callback: (
            error: ServiceError | null,
            response: ListImagesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListImagesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListImagesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListImagesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListImagesResponse
        ) => void
    ): ClientUnaryCall;
    /**
     * Returns the specified Image resource.
     *
     * To get the list of available Image resources, make a [List] request.
     */
    get(
        request: GetImageRequest,
        callback: (error: ServiceError | null, response: Image) => void
    ): ClientUnaryCall;
    get(
        request: GetImageRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Image) => void
    ): ClientUnaryCall;
    get(
        request: GetImageRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Image) => void
    ): ClientUnaryCall;
    /** Deletes the specified Docker image. */
    delete(
        request: DeleteImageRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteImageRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteImageRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
}

export const ImageServiceClient = makeGenericClientConstructor(
    ImageServiceService,
    'yandex.cloud.containerregistry.v1.ImageService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): ImageServiceClient;
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

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

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error(
            'Value is larger than Number.MAX_SAFE_INTEGER'
        );
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}