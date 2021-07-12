/// <reference types="node" />
import { Database, DatabaseSpec } from '../../../../../yandex/cloud/mdb/sqlserver/v1/database';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.sqlserver.v1";
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
export declare const GetDatabaseRequest: {
    encode(message: GetDatabaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDatabaseRequest;
    fromJSON(object: any): GetDatabaseRequest;
    toJSON(message: GetDatabaseRequest): unknown;
    fromPartial(object: DeepPartial<GetDatabaseRequest>): GetDatabaseRequest;
};
export declare const ListDatabasesRequest: {
    encode(message: ListDatabasesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDatabasesRequest;
    fromJSON(object: any): ListDatabasesRequest;
    toJSON(message: ListDatabasesRequest): unknown;
    fromPartial(object: DeepPartial<ListDatabasesRequest>): ListDatabasesRequest;
};
export declare const ListDatabasesResponse: {
    encode(message: ListDatabasesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDatabasesResponse;
    fromJSON(object: any): ListDatabasesResponse;
    toJSON(message: ListDatabasesResponse): unknown;
    fromPartial(object: DeepPartial<ListDatabasesResponse>): ListDatabasesResponse;
};
export declare const CreateDatabaseRequest: {
    encode(message: CreateDatabaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDatabaseRequest;
    fromJSON(object: any): CreateDatabaseRequest;
    toJSON(message: CreateDatabaseRequest): unknown;
    fromPartial(object: DeepPartial<CreateDatabaseRequest>): CreateDatabaseRequest;
};
export declare const CreateDatabaseMetadata: {
    encode(message: CreateDatabaseMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDatabaseMetadata;
    fromJSON(object: any): CreateDatabaseMetadata;
    toJSON(message: CreateDatabaseMetadata): unknown;
    fromPartial(object: DeepPartial<CreateDatabaseMetadata>): CreateDatabaseMetadata;
};
export declare const DeleteDatabaseRequest: {
    encode(message: DeleteDatabaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDatabaseRequest;
    fromJSON(object: any): DeleteDatabaseRequest;
    toJSON(message: DeleteDatabaseRequest): unknown;
    fromPartial(object: DeepPartial<DeleteDatabaseRequest>): DeleteDatabaseRequest;
};
export declare const DeleteDatabaseMetadata: {
    encode(message: DeleteDatabaseMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDatabaseMetadata;
    fromJSON(object: any): DeleteDatabaseMetadata;
    toJSON(message: DeleteDatabaseMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteDatabaseMetadata>): DeleteDatabaseMetadata;
};
/** A set of methods for managing SQL Server databases. */
export declare const DatabaseServiceService: {
    /**
     * Returns the specified SQL Server database.
     *
     * To get the list of available SQL Server databases, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetDatabaseRequest;
        readonly responseSerialize: (value: Database) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Database;
    };
    /** Retrieves the list of SQL Server databases in the specified cluster. */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDatabasesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDatabasesRequest;
        readonly responseSerialize: (value: ListDatabasesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDatabasesResponse;
    };
    /** Creates a new SQL Server database in the specified cluster. */
    readonly create: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateDatabaseRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified SQL Server database. */
    readonly delete: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.DatabaseService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteDatabaseRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
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
    /** Deletes the specified SQL Server database. */
    delete: handleUnaryCall<DeleteDatabaseRequest, Operation>;
}
export interface DatabaseServiceClient extends Client {
    /**
     * Returns the specified SQL Server database.
     *
     * To get the list of available SQL Server databases, make a [List] request.
     */
    get(request: GetDatabaseRequest, callback: (error: ServiceError | null, response: Database) => void): ClientUnaryCall;
    get(request: GetDatabaseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Database) => void): ClientUnaryCall;
    get(request: GetDatabaseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Database) => void): ClientUnaryCall;
    /** Retrieves the list of SQL Server databases in the specified cluster. */
    list(request: ListDatabasesRequest, callback: (error: ServiceError | null, response: ListDatabasesResponse) => void): ClientUnaryCall;
    list(request: ListDatabasesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDatabasesResponse) => void): ClientUnaryCall;
    list(request: ListDatabasesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDatabasesResponse) => void): ClientUnaryCall;
    /** Creates a new SQL Server database in the specified cluster. */
    create(request: CreateDatabaseRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDatabaseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDatabaseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified SQL Server database. */
    delete(request: DeleteDatabaseRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteDatabaseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteDatabaseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const DatabaseServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => DatabaseServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
