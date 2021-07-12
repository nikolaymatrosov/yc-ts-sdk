/* eslint-disable */
import {
    Database,
    DatabaseSpec,
} from '../../../../../yandex/cloud/mdb/clickhouse/v1/database';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
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

export const protobufPackage = 'yandex.cloud.mdb.clickhouse.v1';

export interface GetDatabaseRequest {
    /**
     * ID of the ClickHouse cluster that the database belongs to.
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the ClickHouse Database resource to return.
     * To get the name of the database, use a [DatabaseService.List] request.
     */
    databaseName: string;
}

export interface ListDatabasesRequest {
    /**
     * ID of the ClickHouse cluster to list databases in.
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListDatabasesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.  to get the next page of results, set [page_token] to the [ListDatabasesResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}

export interface ListDatabasesResponse {
    /** List of ClickHouse databases. */
    databases: Database[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListDatabasesRequest.page_size], use the [next_page_token] as the value
     * for the [ListDatabasesRequest.page_token] parameter in the next list request. Each subsequent
     * list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateDatabaseRequest {
    /**
     * ID of the ClickHouse cluster to create a database in.
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Configuration of the database to create. */
    databaseSpec: DatabaseSpec | undefined;
}

export interface CreateDatabaseMetadata {
    /** ID of the ClickHouse cluster where a database is being created. */
    clusterId: string;
    /** Name of the ClickHouse database that is being created. */
    databaseName: string;
}

export interface DeleteDatabaseRequest {
    /**
     * ID of the ClickHouse cluster to delete a database in.
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the database to delete.
     * To get the name of the database, use a [DatabaseService.List] request.
     */
    databaseName: string;
}

export interface DeleteDatabaseMetadata {
    /** ID of the ClickHouse cluster where a database is being deleted. */
    clusterId: string;
    /** Name of the ClickHouse database that is being deleted. */
    databaseName: string;
}

const baseGetDatabaseRequest: object = { clusterId: '', databaseName: '' };

export const GetDatabaseRequest = {
    encode(
        message: GetDatabaseRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.databaseName !== '') {
            writer.uint32(18).string(message.databaseName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetDatabaseRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetDatabaseRequest } as GetDatabaseRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetDatabaseRequest {
        const message = { ...baseGetDatabaseRequest } as GetDatabaseRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = String(object.databaseName);
        } else {
            message.databaseName = '';
        }
        return message;
    },

    toJSON(message: GetDatabaseRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },

    fromPartial(object: DeepPartial<GetDatabaseRequest>): GetDatabaseRequest {
        const message = { ...baseGetDatabaseRequest } as GetDatabaseRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = object.databaseName;
        } else {
            message.databaseName = '';
        }
        return message;
    },
};

const baseListDatabasesRequest: object = {
    clusterId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListDatabasesRequest = {
    encode(
        message: ListDatabasesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListDatabasesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDatabasesRequest } as ListDatabasesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListDatabasesRequest {
        const message = { ...baseListDatabasesRequest } as ListDatabasesRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
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
        return message;
    },

    toJSON(message: ListDatabasesRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListDatabasesRequest>
    ): ListDatabasesRequest {
        const message = { ...baseListDatabasesRequest } as ListDatabasesRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
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
        return message;
    },
};

const baseListDatabasesResponse: object = { nextPageToken: '' };

export const ListDatabasesResponse = {
    encode(
        message: ListDatabasesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.databases) {
            Database.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListDatabasesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDatabasesResponse,
        } as ListDatabasesResponse;
        message.databases = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.databases.push(
                        Database.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListDatabasesResponse {
        const message = {
            ...baseListDatabasesResponse,
        } as ListDatabasesResponse;
        message.databases = [];
        if (object.databases !== undefined && object.databases !== null) {
            for (const e of object.databases) {
                message.databases.push(Database.fromJSON(e));
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

    toJSON(message: ListDatabasesResponse): unknown {
        const obj: any = {};
        if (message.databases) {
            obj.databases = message.databases.map((e) =>
                e ? Database.toJSON(e) : undefined
            );
        } else {
            obj.databases = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListDatabasesResponse>
    ): ListDatabasesResponse {
        const message = {
            ...baseListDatabasesResponse,
        } as ListDatabasesResponse;
        message.databases = [];
        if (object.databases !== undefined && object.databases !== null) {
            for (const e of object.databases) {
                message.databases.push(Database.fromPartial(e));
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

const baseCreateDatabaseRequest: object = { clusterId: '' };

export const CreateDatabaseRequest = {
    encode(
        message: CreateDatabaseRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.databaseSpec !== undefined) {
            DatabaseSpec.encode(
                message.databaseSpec,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateDatabaseRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateDatabaseRequest,
        } as CreateDatabaseRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.databaseSpec = DatabaseSpec.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateDatabaseRequest {
        const message = {
            ...baseCreateDatabaseRequest,
        } as CreateDatabaseRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.databaseSpec !== undefined && object.databaseSpec !== null) {
            message.databaseSpec = DatabaseSpec.fromJSON(object.databaseSpec);
        } else {
            message.databaseSpec = undefined;
        }
        return message;
    },

    toJSON(message: CreateDatabaseRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.databaseSpec !== undefined &&
            (obj.databaseSpec = message.databaseSpec
                ? DatabaseSpec.toJSON(message.databaseSpec)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateDatabaseRequest>
    ): CreateDatabaseRequest {
        const message = {
            ...baseCreateDatabaseRequest,
        } as CreateDatabaseRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.databaseSpec !== undefined && object.databaseSpec !== null) {
            message.databaseSpec = DatabaseSpec.fromPartial(
                object.databaseSpec
            );
        } else {
            message.databaseSpec = undefined;
        }
        return message;
    },
};

const baseCreateDatabaseMetadata: object = { clusterId: '', databaseName: '' };

export const CreateDatabaseMetadata = {
    encode(
        message: CreateDatabaseMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.databaseName !== '') {
            writer.uint32(18).string(message.databaseName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateDatabaseMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateDatabaseMetadata,
        } as CreateDatabaseMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateDatabaseMetadata {
        const message = {
            ...baseCreateDatabaseMetadata,
        } as CreateDatabaseMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = String(object.databaseName);
        } else {
            message.databaseName = '';
        }
        return message;
    },

    toJSON(message: CreateDatabaseMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateDatabaseMetadata>
    ): CreateDatabaseMetadata {
        const message = {
            ...baseCreateDatabaseMetadata,
        } as CreateDatabaseMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = object.databaseName;
        } else {
            message.databaseName = '';
        }
        return message;
    },
};

const baseDeleteDatabaseRequest: object = { clusterId: '', databaseName: '' };

export const DeleteDatabaseRequest = {
    encode(
        message: DeleteDatabaseRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.databaseName !== '') {
            writer.uint32(18).string(message.databaseName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteDatabaseRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteDatabaseRequest,
        } as DeleteDatabaseRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteDatabaseRequest {
        const message = {
            ...baseDeleteDatabaseRequest,
        } as DeleteDatabaseRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = String(object.databaseName);
        } else {
            message.databaseName = '';
        }
        return message;
    },

    toJSON(message: DeleteDatabaseRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteDatabaseRequest>
    ): DeleteDatabaseRequest {
        const message = {
            ...baseDeleteDatabaseRequest,
        } as DeleteDatabaseRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = object.databaseName;
        } else {
            message.databaseName = '';
        }
        return message;
    },
};

const baseDeleteDatabaseMetadata: object = { clusterId: '', databaseName: '' };

export const DeleteDatabaseMetadata = {
    encode(
        message: DeleteDatabaseMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.databaseName !== '') {
            writer.uint32(18).string(message.databaseName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteDatabaseMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteDatabaseMetadata,
        } as DeleteDatabaseMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteDatabaseMetadata {
        const message = {
            ...baseDeleteDatabaseMetadata,
        } as DeleteDatabaseMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = String(object.databaseName);
        } else {
            message.databaseName = '';
        }
        return message;
    },

    toJSON(message: DeleteDatabaseMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteDatabaseMetadata>
    ): DeleteDatabaseMetadata {
        const message = {
            ...baseDeleteDatabaseMetadata,
        } as DeleteDatabaseMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (object.databaseName !== undefined && object.databaseName !== null) {
            message.databaseName = object.databaseName;
        } else {
            message.databaseName = '';
        }
        return message;
    },
};

/**
 * A set of methods for managing ClickHouse Database resources.
 * NOTE: these methods are available only if database management through SQL is disabled.
 */
export const DatabaseServiceService = {
    /**
     * Returns the specified ClickHouse Database resource.
     *
     * To get the list of available ClickHouse Database resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.mdb.clickhouse.v1.DatabaseService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetDatabaseRequest) =>
            Buffer.from(GetDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetDatabaseRequest.decode(value),
        responseSerialize: (value: Database) =>
            Buffer.from(Database.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Database.decode(value),
    },
    /** Retrieves the list of ClickHouse Database resources in the specified cluster. */
    list: {
        path: '/yandex.cloud.mdb.clickhouse.v1.DatabaseService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListDatabasesRequest) =>
            Buffer.from(ListDatabasesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListDatabasesRequest.decode(value),
        responseSerialize: (value: ListDatabasesResponse) =>
            Buffer.from(ListDatabasesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListDatabasesResponse.decode(value),
    },
    /** Creates a new ClickHouse database in the specified cluster. */
    create: {
        path: '/yandex.cloud.mdb.clickhouse.v1.DatabaseService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateDatabaseRequest) =>
            Buffer.from(CreateDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateDatabaseRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified ClickHouse database. */
    delete: {
        path: '/yandex.cloud.mdb.clickhouse.v1.DatabaseService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteDatabaseRequest) =>
            Buffer.from(DeleteDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteDatabaseRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface DatabaseServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified ClickHouse Database resource.
     *
     * To get the list of available ClickHouse Database resources, make a [List] request.
     */
    get: handleUnaryCall<GetDatabaseRequest, Database>;
    /** Retrieves the list of ClickHouse Database resources in the specified cluster. */
    list: handleUnaryCall<ListDatabasesRequest, ListDatabasesResponse>;
    /** Creates a new ClickHouse database in the specified cluster. */
    create: handleUnaryCall<CreateDatabaseRequest, Operation>;
    /** Deletes the specified ClickHouse database. */
    delete: handleUnaryCall<DeleteDatabaseRequest, Operation>;
}

export interface DatabaseServiceClient extends Client {
    /**
     * Returns the specified ClickHouse Database resource.
     *
     * To get the list of available ClickHouse Database resources, make a [List] request.
     */
    get(
        request: GetDatabaseRequest,
        callback: (error: ServiceError | null, response: Database) => void
    ): ClientUnaryCall;
    get(
        request: GetDatabaseRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Database) => void
    ): ClientUnaryCall;
    get(
        request: GetDatabaseRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Database) => void
    ): ClientUnaryCall;
    /** Retrieves the list of ClickHouse Database resources in the specified cluster. */
    list(
        request: ListDatabasesRequest,
        callback: (
            error: ServiceError | null,
            response: ListDatabasesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListDatabasesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListDatabasesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListDatabasesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListDatabasesResponse
        ) => void
    ): ClientUnaryCall;
    /** Creates a new ClickHouse database in the specified cluster. */
    create(
        request: CreateDatabaseRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateDatabaseRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateDatabaseRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified ClickHouse database. */
    delete(
        request: DeleteDatabaseRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteDatabaseRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteDatabaseRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
}

export const DatabaseServiceClient = makeGenericClientConstructor(
    DatabaseServiceService,
    'yandex.cloud.mdb.clickhouse.v1.DatabaseService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): DatabaseServiceClient;
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
