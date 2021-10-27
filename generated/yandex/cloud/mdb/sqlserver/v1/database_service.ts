/* eslint-disable */
import { Timestamp } from '../../../../../google/protobuf/timestamp';
import {
    Database,
    DatabaseSpec,
} from '../../../../../yandex/cloud/mdb/sqlserver/v1/database';
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

export const protobufPackage = 'yandex.cloud.mdb.sqlserver.v1';

export interface GetDatabaseRequest {
    /**
     * ID of the SQL Server cluster the database belongs to.
     *
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the SQL Server database to return.
     *
     * To get the name of the database use a [DatabaseService.List] request.
     */
    databaseName: string;
}

export interface ListDatabasesRequest {
    /**
     * ID of the SQL Server cluster to list databases in.
     *
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListDatabasesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, Set `page_token` to the [ListDatabasesResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}

export interface ListDatabasesResponse {
    /** List of SQL Server databases. */
    databases: Database[];
    /**
     * Token that allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListDatabasesRequest.page_size], use the `next_page_token` as the value
     * for the [ListDatabasesRequest.page_token] parameter in the next list request. Each subsequent
     * list request will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateDatabaseRequest {
    /**
     * ID of the SQL Server cluster to create a database in.
     *
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Configuration of the database to create. */
    databaseSpec: DatabaseSpec | undefined;
}

export interface CreateDatabaseMetadata {
    /** ID of the SQL Server cluster where the database is being created. */
    clusterId: string;
    /** Name of the SQL Server database being created. */
    databaseName: string;
}

export interface RestoreDatabaseMetadata {
    /** ID of the SQLServer cluster where a database is being created. */
    clusterId: string;
    /** Name of the SQLServer database that is being created. */
    databaseName: string;
    /** name of the database which backup will be used to restore the database */
    fromDatabase: string;
    /** ID of a backup to be used */
    backupId: string;
}

export interface DeleteDatabaseRequest {
    /**
     * ID of the SQL Server cluster to delete a database in.
     *
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the database to delete.
     *
     * To get the name of the database, use a [DatabaseService.List] request.
     */
    databaseName: string;
}

export interface DeleteDatabaseMetadata {
    /** ID of the SQL Server cluster where the database is being deleted. */
    clusterId: string;
    /** Name of the SQL Server database being deleted. */
    databaseName: string;
}

export interface RestoreDatabaseRequest {
    /**
     * Required. ID of the SQL Server cluster to restore a database in.
     * To get the cluster ID, use a [ClusterService.List] request
     */
    clusterId: string;
    /** Name of the SQLServer database that is being restored. */
    databaseName: string;
    /** name of the database which backup will be used to restore the database */
    fromDatabase: string;
    /** ID of a backup to be used */
    backupId: string;
    /** Timestamp which is used for Point-in-Time recovery */
    time: Date | undefined;
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

const baseRestoreDatabaseMetadata: object = {
    clusterId: '',
    databaseName: '',
    fromDatabase: '',
    backupId: '',
};

export const RestoreDatabaseMetadata = {
    encode(
        message: RestoreDatabaseMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.databaseName !== '') {
            writer.uint32(18).string(message.databaseName);
        }
        if (message.fromDatabase !== '') {
            writer.uint32(26).string(message.fromDatabase);
        }
        if (message.backupId !== '') {
            writer.uint32(34).string(message.backupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): RestoreDatabaseMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRestoreDatabaseMetadata,
        } as RestoreDatabaseMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
                    break;
                case 3:
                    message.fromDatabase = reader.string();
                    break;
                case 4:
                    message.backupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RestoreDatabaseMetadata {
        const message = {
            ...baseRestoreDatabaseMetadata,
        } as RestoreDatabaseMetadata;
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
        if (object.fromDatabase !== undefined && object.fromDatabase !== null) {
            message.fromDatabase = String(object.fromDatabase);
        } else {
            message.fromDatabase = '';
        }
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = String(object.backupId);
        } else {
            message.backupId = '';
        }
        return message;
    },

    toJSON(message: RestoreDatabaseMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        message.fromDatabase !== undefined &&
            (obj.fromDatabase = message.fromDatabase);
        message.backupId !== undefined && (obj.backupId = message.backupId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<RestoreDatabaseMetadata>
    ): RestoreDatabaseMetadata {
        const message = {
            ...baseRestoreDatabaseMetadata,
        } as RestoreDatabaseMetadata;
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
        if (object.fromDatabase !== undefined && object.fromDatabase !== null) {
            message.fromDatabase = object.fromDatabase;
        } else {
            message.fromDatabase = '';
        }
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = object.backupId;
        } else {
            message.backupId = '';
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

const baseRestoreDatabaseRequest: object = {
    clusterId: '',
    databaseName: '',
    fromDatabase: '',
    backupId: '',
};

export const RestoreDatabaseRequest = {
    encode(
        message: RestoreDatabaseRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.databaseName !== '') {
            writer.uint32(18).string(message.databaseName);
        }
        if (message.fromDatabase !== '') {
            writer.uint32(26).string(message.fromDatabase);
        }
        if (message.backupId !== '') {
            writer.uint32(34).string(message.backupId);
        }
        if (message.time !== undefined) {
            Timestamp.encode(
                toTimestamp(message.time),
                writer.uint32(50).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): RestoreDatabaseRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseRestoreDatabaseRequest,
        } as RestoreDatabaseRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.databaseName = reader.string();
                    break;
                case 3:
                    message.fromDatabase = reader.string();
                    break;
                case 4:
                    message.backupId = reader.string();
                    break;
                case 6:
                    message.time = fromTimestamp(
                        Timestamp.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RestoreDatabaseRequest {
        const message = {
            ...baseRestoreDatabaseRequest,
        } as RestoreDatabaseRequest;
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
        if (object.fromDatabase !== undefined && object.fromDatabase !== null) {
            message.fromDatabase = String(object.fromDatabase);
        } else {
            message.fromDatabase = '';
        }
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = String(object.backupId);
        } else {
            message.backupId = '';
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = fromJsonTimestamp(object.time);
        } else {
            message.time = undefined;
        }
        return message;
    },

    toJSON(message: RestoreDatabaseRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.databaseName !== undefined &&
            (obj.databaseName = message.databaseName);
        message.fromDatabase !== undefined &&
            (obj.fromDatabase = message.fromDatabase);
        message.backupId !== undefined && (obj.backupId = message.backupId);
        message.time !== undefined && (obj.time = message.time.toISOString());
        return obj;
    },

    fromPartial(
        object: DeepPartial<RestoreDatabaseRequest>
    ): RestoreDatabaseRequest {
        const message = {
            ...baseRestoreDatabaseRequest,
        } as RestoreDatabaseRequest;
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
        if (object.fromDatabase !== undefined && object.fromDatabase !== null) {
            message.fromDatabase = object.fromDatabase;
        } else {
            message.fromDatabase = '';
        }
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = object.backupId;
        } else {
            message.backupId = '';
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = object.time;
        } else {
            message.time = undefined;
        }
        return message;
    },
};

/** A set of methods for managing SQL Server databases. */
export const DatabaseServiceService = {
    /**
     * Returns the specified SQL Server database.
     *
     * To get the list of available SQL Server databases, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.mdb.sqlserver.v1.DatabaseService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetDatabaseRequest) =>
            Buffer.from(GetDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetDatabaseRequest.decode(value),
        responseSerialize: (value: Database) =>
            Buffer.from(Database.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Database.decode(value),
    },
    /** Retrieves the list of SQL Server databases in the specified cluster. */
    list: {
        path: '/yandex.cloud.mdb.sqlserver.v1.DatabaseService/List',
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
    /** Creates a new SQL Server database in the specified cluster. */
    create: {
        path: '/yandex.cloud.mdb.sqlserver.v1.DatabaseService/Create',
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
    /** Creates a new SQL Server database in the specified cluster from a backup */
    restore: {
        path: '/yandex.cloud.mdb.sqlserver.v1.DatabaseService/Restore',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: RestoreDatabaseRequest) =>
            Buffer.from(RestoreDatabaseRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            RestoreDatabaseRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified SQL Server database. */
    delete: {
        path: '/yandex.cloud.mdb.sqlserver.v1.DatabaseService/Delete',
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
     * Returns the specified SQL Server database.
     *
     * To get the list of available SQL Server databases, make a [List] request.
     */
    get: handleUnaryCall<GetDatabaseRequest, Database>;
    /** Retrieves the list of SQL Server databases in the specified cluster. */
    list: handleUnaryCall<ListDatabasesRequest, ListDatabasesResponse>;
    /** Creates a new SQL Server database in the specified cluster. */
    create: handleUnaryCall<CreateDatabaseRequest, Operation>;
    /** Creates a new SQL Server database in the specified cluster from a backup */
    restore: handleUnaryCall<RestoreDatabaseRequest, Operation>;
    /** Deletes the specified SQL Server database. */
    delete: handleUnaryCall<DeleteDatabaseRequest, Operation>;
}

export interface DatabaseServiceClient extends Client {
    /**
     * Returns the specified SQL Server database.
     *
     * To get the list of available SQL Server databases, make a [List] request.
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
    /** Retrieves the list of SQL Server databases in the specified cluster. */
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
    /** Creates a new SQL Server database in the specified cluster. */
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
    /** Creates a new SQL Server database in the specified cluster from a backup */
    restore(
        request: RestoreDatabaseRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    restore(
        request: RestoreDatabaseRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    restore(
        request: RestoreDatabaseRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified SQL Server database. */
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
    'yandex.cloud.mdb.sqlserver.v1.DatabaseService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): DatabaseServiceClient;
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
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

function toTimestamp(date: Date): Timestamp {
    const seconds = date.getTime() / 1_000;
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

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
