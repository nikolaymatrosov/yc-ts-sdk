/// <reference types="node" />
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { Backup } from '../../../../yandex/cloud/ydb/v1/backup';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.ydb.v1";
export interface ListPathsRequest {
    $type: 'yandex.cloud.ydb.v1.ListPathsRequest';
    /** Required. ID of the YDB backup. */
    backupId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a `next_page_token` that can be used
     * to get the next page of results in subsequent ListPaths requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set `page_token` to the `next_page_token` returned by a previous ListPaths
     * request to get the next page of results.
     */
    pageToken: string;
}
export interface ListPathsResponse {
    $type: 'yandex.cloud.ydb.v1.ListPathsResponse';
    paths: string[];
    nextPageToken: string;
}
export interface GetBackupRequest {
    $type: 'yandex.cloud.ydb.v1.GetBackupRequest';
    /** Required. ID of the YDB backup. */
    backupId: string;
}
export interface ListBackupsRequest {
    $type: 'yandex.cloud.ydb.v1.ListBackupsRequest';
    folderId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a `next_page_token` that can be used
     * to get the next page of results in subsequent ListBackups requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set `page_token` to the `next_page_token` returned by a previous ListBackups
     * request to get the next page of results.
     */
    pageToken: string;
}
export interface ListBackupsResponse {
    $type: 'yandex.cloud.ydb.v1.ListBackupsResponse';
    backups: Backup[];
    /**
     * This token allows you to get the next page of results for ListBackups requests,
     * if the number of results is larger than `page_size` specified in the request.
     * To get the next page, specify the value of `next_page_token` as a value for
     * the `page_token` parameter in the next ListBackups request. Subsequent ListBackups
     * requests will have their own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface DeleteBackupRequest {
    $type: 'yandex.cloud.ydb.v1.DeleteBackupRequest';
    backupId: string;
}
export interface DeleteBackupMetadata {
    $type: 'yandex.cloud.ydb.v1.DeleteBackupMetadata';
    backupId: string;
    databaseId: string;
}
export declare const ListPathsRequest: {
    $type: "yandex.cloud.ydb.v1.ListPathsRequest";
    encode(message: ListPathsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListPathsRequest;
    fromJSON(object: any): ListPathsRequest;
    toJSON(message: ListPathsRequest): unknown;
    fromPartial(object: DeepPartial<ListPathsRequest>): ListPathsRequest;
};
export declare const ListPathsResponse: {
    $type: "yandex.cloud.ydb.v1.ListPathsResponse";
    encode(message: ListPathsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListPathsResponse;
    fromJSON(object: any): ListPathsResponse;
    toJSON(message: ListPathsResponse): unknown;
    fromPartial(object: DeepPartial<ListPathsResponse>): ListPathsResponse;
};
export declare const GetBackupRequest: {
    $type: "yandex.cloud.ydb.v1.GetBackupRequest";
    encode(message: GetBackupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetBackupRequest;
    fromJSON(object: any): GetBackupRequest;
    toJSON(message: GetBackupRequest): unknown;
    fromPartial(object: DeepPartial<GetBackupRequest>): GetBackupRequest;
};
export declare const ListBackupsRequest: {
    $type: "yandex.cloud.ydb.v1.ListBackupsRequest";
    encode(message: ListBackupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBackupsRequest;
    fromJSON(object: any): ListBackupsRequest;
    toJSON(message: ListBackupsRequest): unknown;
    fromPartial(object: DeepPartial<ListBackupsRequest>): ListBackupsRequest;
};
export declare const ListBackupsResponse: {
    $type: "yandex.cloud.ydb.v1.ListBackupsResponse";
    encode(message: ListBackupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBackupsResponse;
    fromJSON(object: any): ListBackupsResponse;
    toJSON(message: ListBackupsResponse): unknown;
    fromPartial(object: DeepPartial<ListBackupsResponse>): ListBackupsResponse;
};
export declare const DeleteBackupRequest: {
    $type: "yandex.cloud.ydb.v1.DeleteBackupRequest";
    encode(message: DeleteBackupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteBackupRequest;
    fromJSON(object: any): DeleteBackupRequest;
    toJSON(message: DeleteBackupRequest): unknown;
    fromPartial(object: DeepPartial<DeleteBackupRequest>): DeleteBackupRequest;
};
export declare const DeleteBackupMetadata: {
    $type: "yandex.cloud.ydb.v1.DeleteBackupMetadata";
    encode(message: DeleteBackupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteBackupMetadata;
    fromJSON(object: any): DeleteBackupMetadata;
    toJSON(message: DeleteBackupMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteBackupMetadata>): DeleteBackupMetadata;
};
/** A set of methods for managing backups. */
export declare const BackupServiceService: {
    /** Returns the specified backup. */
    readonly get: {
        readonly path: "/yandex.cloud.ydb.v1.BackupService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetBackupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetBackupRequest;
        readonly responseSerialize: (value: Backup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Backup;
    };
    readonly listPaths: {
        readonly path: "/yandex.cloud.ydb.v1.BackupService/ListPaths";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListPathsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListPathsRequest;
        readonly responseSerialize: (value: ListPathsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListPathsResponse;
    };
    /** Retrieves a list of backups. */
    readonly list: {
        readonly path: "/yandex.cloud.ydb.v1.BackupService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListBackupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListBackupsRequest;
        readonly responseSerialize: (value: ListBackupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListBackupsResponse;
    };
    /** Deletes the specified backup. */
    readonly delete: {
        readonly path: "/yandex.cloud.ydb.v1.BackupService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteBackupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteBackupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface BackupServiceServer extends UntypedServiceImplementation {
    /** Returns the specified backup. */
    get: handleUnaryCall<GetBackupRequest, Backup>;
    listPaths: handleUnaryCall<ListPathsRequest, ListPathsResponse>;
    /** Retrieves a list of backups. */
    list: handleUnaryCall<ListBackupsRequest, ListBackupsResponse>;
    /** Deletes the specified backup. */
    delete: handleUnaryCall<DeleteBackupRequest, Operation>;
}
export interface BackupServiceClient extends Client {
    /** Returns the specified backup. */
    get(request: GetBackupRequest, callback: (error: ServiceError | null, response: Backup) => void): ClientUnaryCall;
    get(request: GetBackupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Backup) => void): ClientUnaryCall;
    get(request: GetBackupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Backup) => void): ClientUnaryCall;
    listPaths(request: ListPathsRequest, callback: (error: ServiceError | null, response: ListPathsResponse) => void): ClientUnaryCall;
    listPaths(request: ListPathsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListPathsResponse) => void): ClientUnaryCall;
    listPaths(request: ListPathsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListPathsResponse) => void): ClientUnaryCall;
    /** Retrieves a list of backups. */
    list(request: ListBackupsRequest, callback: (error: ServiceError | null, response: ListBackupsResponse) => void): ClientUnaryCall;
    list(request: ListBackupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListBackupsResponse) => void): ClientUnaryCall;
    list(request: ListBackupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListBackupsResponse) => void): ClientUnaryCall;
    /** Deletes the specified backup. */
    delete(request: DeleteBackupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteBackupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteBackupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const BackupServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => BackupServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
