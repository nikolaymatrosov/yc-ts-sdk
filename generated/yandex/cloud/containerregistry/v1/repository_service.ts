/* eslint-disable */
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../../../yandex/cloud/access/access';
import { Repository } from '../../../../yandex/cloud/containerregistry/v1/repository';
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

export interface GetRepositoryRequest {
    /**
     * ID of the Repository resource to return.
     *
     * To get the repository ID use a [RepositoryService.List] request.
     */
    repositoryId: string;
}

export interface GetRepositoryByNameRequest {
    /**
     * Name of the Repository resource to return.
     *
     * To get the repository name use a [RepositoryService.List] request.
     */
    repositoryName: string;
}

export interface ListRepositoriesRequest {
    /**
     * ID of the registry to list repositories in.
     *
     * To get the registry ID use a [RegistryService.List] request.
     */
    registryId: string;
    /**
     * ID of the folder to list registries in.
     *
     * [folder_id] is ignored if a [ListImagesRequest.registry_id] is specified in the request.
     *
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListRepositoriesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListRepositoriesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Repository.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. Value or a list of values to compare against the values of the field.
     */
    filter: string;
    orderBy: string;
}

export interface ListRepositoriesResponse {
    /** List of Repository resources. */
    repositories: Repository[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListRepositoriesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListRepositoriesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface UpsertRepositoryRequest {
    /**
     * Name of the repository.
     *
     * The name of the repository should match the name of the images that will be pushed in the repository.
     */
    name: string;
}

export interface UpsertRepositoryMetadata {
    /** ID of the repository that is being upserted. */
    repositoryId: string;
}

export interface DeleteRepositoryRequest {
    /** ID of the repository to delete. */
    repositoryId: string;
}

export interface DeleteRepositoryMetadata {
    /** ID of the repository that is being deleted. */
    repositoryId: string;
}

const baseGetRepositoryRequest: object = { repositoryId: '' };

export const GetRepositoryRequest = {
    encode(
        message: GetRepositoryRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.repositoryId !== '') {
            writer.uint32(10).string(message.repositoryId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetRepositoryRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetRepositoryRequest } as GetRepositoryRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.repositoryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetRepositoryRequest {
        const message = { ...baseGetRepositoryRequest } as GetRepositoryRequest;
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = String(object.repositoryId);
        } else {
            message.repositoryId = '';
        }
        return message;
    },

    toJSON(message: GetRepositoryRequest): unknown {
        const obj: any = {};
        message.repositoryId !== undefined &&
            (obj.repositoryId = message.repositoryId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetRepositoryRequest>
    ): GetRepositoryRequest {
        const message = { ...baseGetRepositoryRequest } as GetRepositoryRequest;
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = object.repositoryId;
        } else {
            message.repositoryId = '';
        }
        return message;
    },
};

const baseGetRepositoryByNameRequest: object = { repositoryName: '' };

export const GetRepositoryByNameRequest = {
    encode(
        message: GetRepositoryByNameRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.repositoryName !== '') {
            writer.uint32(10).string(message.repositoryName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetRepositoryByNameRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetRepositoryByNameRequest,
        } as GetRepositoryByNameRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.repositoryName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetRepositoryByNameRequest {
        const message = {
            ...baseGetRepositoryByNameRequest,
        } as GetRepositoryByNameRequest;
        if (
            object.repositoryName !== undefined &&
            object.repositoryName !== null
        ) {
            message.repositoryName = String(object.repositoryName);
        } else {
            message.repositoryName = '';
        }
        return message;
    },

    toJSON(message: GetRepositoryByNameRequest): unknown {
        const obj: any = {};
        message.repositoryName !== undefined &&
            (obj.repositoryName = message.repositoryName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetRepositoryByNameRequest>
    ): GetRepositoryByNameRequest {
        const message = {
            ...baseGetRepositoryByNameRequest,
        } as GetRepositoryByNameRequest;
        if (
            object.repositoryName !== undefined &&
            object.repositoryName !== null
        ) {
            message.repositoryName = object.repositoryName;
        } else {
            message.repositoryName = '';
        }
        return message;
    },
};

const baseListRepositoriesRequest: object = {
    registryId: '',
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
    orderBy: '',
};

export const ListRepositoriesRequest = {
    encode(
        message: ListRepositoriesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.folderId !== '') {
            writer.uint32(50).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        if (message.orderBy !== '') {
            writer.uint32(42).string(message.orderBy);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListRepositoriesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListRepositoriesRequest,
        } as ListRepositoriesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 6:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
                    break;
                case 5:
                    message.orderBy = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListRepositoriesRequest {
        const message = {
            ...baseListRepositoriesRequest,
        } as ListRepositoriesRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = '';
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

    toJSON(message: ListRepositoriesRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListRepositoriesRequest>
    ): ListRepositoriesRequest {
        const message = {
            ...baseListRepositoriesRequest,
        } as ListRepositoriesRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = '';
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

const baseListRepositoriesResponse: object = { nextPageToken: '' };

export const ListRepositoriesResponse = {
    encode(
        message: ListRepositoriesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.repositories) {
            Repository.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListRepositoriesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListRepositoriesResponse,
        } as ListRepositoriesResponse;
        message.repositories = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.repositories.push(
                        Repository.decode(reader, reader.uint32())
                    );
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

    fromJSON(object: any): ListRepositoriesResponse {
        const message = {
            ...baseListRepositoriesResponse,
        } as ListRepositoriesResponse;
        message.repositories = [];
        if (object.repositories !== undefined && object.repositories !== null) {
            for (const e of object.repositories) {
                message.repositories.push(Repository.fromJSON(e));
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

    toJSON(message: ListRepositoriesResponse): unknown {
        const obj: any = {};
        if (message.repositories) {
            obj.repositories = message.repositories.map((e) =>
                e ? Repository.toJSON(e) : undefined
            );
        } else {
            obj.repositories = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListRepositoriesResponse>
    ): ListRepositoriesResponse {
        const message = {
            ...baseListRepositoriesResponse,
        } as ListRepositoriesResponse;
        message.repositories = [];
        if (object.repositories !== undefined && object.repositories !== null) {
            for (const e of object.repositories) {
                message.repositories.push(Repository.fromPartial(e));
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

const baseUpsertRepositoryRequest: object = { name: '' };

export const UpsertRepositoryRequest = {
    encode(
        message: UpsertRepositoryRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpsertRepositoryRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpsertRepositoryRequest,
        } as UpsertRepositoryRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpsertRepositoryRequest {
        const message = {
            ...baseUpsertRepositoryRequest,
        } as UpsertRepositoryRequest;
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        return message;
    },

    toJSON(message: UpsertRepositoryRequest): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpsertRepositoryRequest>
    ): UpsertRepositoryRequest {
        const message = {
            ...baseUpsertRepositoryRequest,
        } as UpsertRepositoryRequest;
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        return message;
    },
};

const baseUpsertRepositoryMetadata: object = { repositoryId: '' };

export const UpsertRepositoryMetadata = {
    encode(
        message: UpsertRepositoryMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.repositoryId !== '') {
            writer.uint32(10).string(message.repositoryId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpsertRepositoryMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpsertRepositoryMetadata,
        } as UpsertRepositoryMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.repositoryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpsertRepositoryMetadata {
        const message = {
            ...baseUpsertRepositoryMetadata,
        } as UpsertRepositoryMetadata;
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = String(object.repositoryId);
        } else {
            message.repositoryId = '';
        }
        return message;
    },

    toJSON(message: UpsertRepositoryMetadata): unknown {
        const obj: any = {};
        message.repositoryId !== undefined &&
            (obj.repositoryId = message.repositoryId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpsertRepositoryMetadata>
    ): UpsertRepositoryMetadata {
        const message = {
            ...baseUpsertRepositoryMetadata,
        } as UpsertRepositoryMetadata;
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = object.repositoryId;
        } else {
            message.repositoryId = '';
        }
        return message;
    },
};

const baseDeleteRepositoryRequest: object = { repositoryId: '' };

export const DeleteRepositoryRequest = {
    encode(
        message: DeleteRepositoryRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.repositoryId !== '') {
            writer.uint32(10).string(message.repositoryId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteRepositoryRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteRepositoryRequest,
        } as DeleteRepositoryRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.repositoryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteRepositoryRequest {
        const message = {
            ...baseDeleteRepositoryRequest,
        } as DeleteRepositoryRequest;
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = String(object.repositoryId);
        } else {
            message.repositoryId = '';
        }
        return message;
    },

    toJSON(message: DeleteRepositoryRequest): unknown {
        const obj: any = {};
        message.repositoryId !== undefined &&
            (obj.repositoryId = message.repositoryId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteRepositoryRequest>
    ): DeleteRepositoryRequest {
        const message = {
            ...baseDeleteRepositoryRequest,
        } as DeleteRepositoryRequest;
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = object.repositoryId;
        } else {
            message.repositoryId = '';
        }
        return message;
    },
};

const baseDeleteRepositoryMetadata: object = { repositoryId: '' };

export const DeleteRepositoryMetadata = {
    encode(
        message: DeleteRepositoryMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.repositoryId !== '') {
            writer.uint32(10).string(message.repositoryId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteRepositoryMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteRepositoryMetadata,
        } as DeleteRepositoryMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.repositoryId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteRepositoryMetadata {
        const message = {
            ...baseDeleteRepositoryMetadata,
        } as DeleteRepositoryMetadata;
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = String(object.repositoryId);
        } else {
            message.repositoryId = '';
        }
        return message;
    },

    toJSON(message: DeleteRepositoryMetadata): unknown {
        const obj: any = {};
        message.repositoryId !== undefined &&
            (obj.repositoryId = message.repositoryId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteRepositoryMetadata>
    ): DeleteRepositoryMetadata {
        const message = {
            ...baseDeleteRepositoryMetadata,
        } as DeleteRepositoryMetadata;
        if (object.repositoryId !== undefined && object.repositoryId !== null) {
            message.repositoryId = object.repositoryId;
        } else {
            message.repositoryId = '';
        }
        return message;
    },
};

/** A set of methods for managing Repository resources. */
export const RepositoryServiceService = {
    /**
     * Returns the specified Repository resource.
     *
     * To get the list of available Repository resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.containerregistry.v1.RepositoryService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetRepositoryRequest) =>
            Buffer.from(GetRepositoryRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetRepositoryRequest.decode(value),
        responseSerialize: (value: Repository) =>
            Buffer.from(Repository.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Repository.decode(value),
    },
    /**
     * Returns the specified Repository resource.
     *
     * To get the list of available Repository resources, make a [List] request.
     */
    getByName: {
        path: '/yandex.cloud.containerregistry.v1.RepositoryService/GetByName',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetRepositoryByNameRequest) =>
            Buffer.from(GetRepositoryByNameRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetRepositoryByNameRequest.decode(value),
        responseSerialize: (value: Repository) =>
            Buffer.from(Repository.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Repository.decode(value),
    },
    /** Retrieves the list of Repository resources in the specified registry. */
    list: {
        path: '/yandex.cloud.containerregistry.v1.RepositoryService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListRepositoriesRequest) =>
            Buffer.from(ListRepositoriesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListRepositoriesRequest.decode(value),
        responseSerialize: (value: ListRepositoriesResponse) =>
            Buffer.from(ListRepositoriesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListRepositoriesResponse.decode(value),
    },
    /** Lists access bindings for the specified repository. */
    listAccessBindings: {
        path: '/yandex.cloud.containerregistry.v1.RepositoryService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessBindingsRequest) =>
            Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListAccessBindingsResponse) =>
            Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListAccessBindingsResponse.decode(value),
    },
    /** Upserts a repository in the specified registry. */
    upsert: {
        path: '/yandex.cloud.containerregistry.v1.RepositoryService/Upsert',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpsertRepositoryRequest) =>
            Buffer.from(UpsertRepositoryRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpsertRepositoryRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified repository. */
    delete: {
        path: '/yandex.cloud.containerregistry.v1.RepositoryService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteRepositoryRequest) =>
            Buffer.from(DeleteRepositoryRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteRepositoryRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Sets access bindings for the specified repository. */
    setAccessBindings: {
        path: '/yandex.cloud.containerregistry.v1.RepositoryService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetAccessBindingsRequest) =>
            Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            SetAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates access bindings for the specified repository. */
    updateAccessBindings: {
        path: '/yandex.cloud.containerregistry.v1.RepositoryService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessBindingsRequest) =>
            Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface RepositoryServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Repository resource.
     *
     * To get the list of available Repository resources, make a [List] request.
     */
    get: handleUnaryCall<GetRepositoryRequest, Repository>;
    /**
     * Returns the specified Repository resource.
     *
     * To get the list of available Repository resources, make a [List] request.
     */
    getByName: handleUnaryCall<GetRepositoryByNameRequest, Repository>;
    /** Retrieves the list of Repository resources in the specified registry. */
    list: handleUnaryCall<ListRepositoriesRequest, ListRepositoriesResponse>;
    /** Lists access bindings for the specified repository. */
    listAccessBindings: handleUnaryCall<
        ListAccessBindingsRequest,
        ListAccessBindingsResponse
    >;
    /** Upserts a repository in the specified registry. */
    upsert: handleUnaryCall<UpsertRepositoryRequest, Operation>;
    /** Deletes the specified repository. */
    delete: handleUnaryCall<DeleteRepositoryRequest, Operation>;
    /** Sets access bindings for the specified repository. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified repository. */
    updateAccessBindings: handleUnaryCall<
        UpdateAccessBindingsRequest,
        Operation
    >;
}

export interface RepositoryServiceClient extends Client {
    /**
     * Returns the specified Repository resource.
     *
     * To get the list of available Repository resources, make a [List] request.
     */
    get(
        request: GetRepositoryRequest,
        callback: (error: ServiceError | null, response: Repository) => void
    ): ClientUnaryCall;
    get(
        request: GetRepositoryRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Repository) => void
    ): ClientUnaryCall;
    get(
        request: GetRepositoryRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Repository) => void
    ): ClientUnaryCall;
    /**
     * Returns the specified Repository resource.
     *
     * To get the list of available Repository resources, make a [List] request.
     */
    getByName(
        request: GetRepositoryByNameRequest,
        callback: (error: ServiceError | null, response: Repository) => void
    ): ClientUnaryCall;
    getByName(
        request: GetRepositoryByNameRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Repository) => void
    ): ClientUnaryCall;
    getByName(
        request: GetRepositoryByNameRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Repository) => void
    ): ClientUnaryCall;
    /** Retrieves the list of Repository resources in the specified registry. */
    list(
        request: ListRepositoriesRequest,
        callback: (
            error: ServiceError | null,
            response: ListRepositoriesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListRepositoriesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListRepositoriesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListRepositoriesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListRepositoriesResponse
        ) => void
    ): ClientUnaryCall;
    /** Lists access bindings for the specified repository. */
    listAccessBindings(
        request: ListAccessBindingsRequest,
        callback: (
            error: ServiceError | null,
            response: ListAccessBindingsResponse
        ) => void
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListAccessBindingsResponse
        ) => void
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListAccessBindingsResponse
        ) => void
    ): ClientUnaryCall;
    /** Upserts a repository in the specified registry. */
    upsert(
        request: UpsertRepositoryRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    upsert(
        request: UpsertRepositoryRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    upsert(
        request: UpsertRepositoryRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified repository. */
    delete(
        request: DeleteRepositoryRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteRepositoryRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteRepositoryRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Sets access bindings for the specified repository. */
    setAccessBindings(
        request: SetAccessBindingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates access bindings for the specified repository. */
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
}

export const RepositoryServiceClient = makeGenericClientConstructor(
    RepositoryServiceService,
    'yandex.cloud.containerregistry.v1.RepositoryService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): RepositoryServiceClient;
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
