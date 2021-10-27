/// <reference types="node" />
import { Backup } from '../../../../../yandex/cloud/mdb/mysql/v1alpha/backup';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.mdb.mysql.v1alpha";
export interface GetBackupRequest {
    $type: 'yandex.cloud.mdb.mysql.v1alpha.GetBackupRequest';
    /**
     * ID of the backup to return information about.
     * To get the backup ID, use a [ClusterService.ListBackups] request.
     */
    backupId: string;
}
export interface ListBackupsRequest {
    $type: 'yandex.cloud.mdb.mysql.v1alpha.ListBackupsRequest';
    /**
     * ID of the folder to list backups in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListBackupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.  To get the next page of results, Set [page_token] to the [ListBackupsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListBackupsResponse {
    $type: 'yandex.cloud.mdb.mysql.v1alpha.ListBackupsResponse';
    /** List of MySQL backups. */
    backups: Backup[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListBackupsRequest.page_size], use the [next_page_token] as the value
     * for the [ListBackupsRequest.page_token] parameter in the next list request. Each subsequent
     * list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetBackupRequest: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.GetBackupRequest";
    encode(message: GetBackupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetBackupRequest;
    fromJSON(object: any): GetBackupRequest;
    toJSON(message: GetBackupRequest): unknown;
    fromPartial(object: DeepPartial<GetBackupRequest>): GetBackupRequest;
};
export declare const ListBackupsRequest: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.ListBackupsRequest";
    encode(message: ListBackupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBackupsRequest;
    fromJSON(object: any): ListBackupsRequest;
    toJSON(message: ListBackupsRequest): unknown;
    fromPartial(object: DeepPartial<ListBackupsRequest>): ListBackupsRequest;
};
export declare const ListBackupsResponse: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.ListBackupsResponse";
    encode(message: ListBackupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBackupsResponse;
    fromJSON(object: any): ListBackupsResponse;
    toJSON(message: ListBackupsResponse): unknown;
    fromPartial(object: DeepPartial<ListBackupsResponse>): ListBackupsResponse;
};
/** A set of methods for managing MySQL backups. */
export declare const BackupServiceService: {
    /**
     * Returns the specified MySQL backup.
     *
     * To get the list of available MySQL backups, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.mysql.v1alpha.BackupService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetBackupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetBackupRequest;
        readonly responseSerialize: (value: Backup) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Backup;
    };
    /** Retrieves the list of MySQL backups available for the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.mysql.v1alpha.BackupService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListBackupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListBackupsRequest;
        readonly responseSerialize: (value: ListBackupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListBackupsResponse;
    };
};
export interface BackupServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified MySQL backup.
     *
     * To get the list of available MySQL backups, make a [List] request.
     */
    get: handleUnaryCall<GetBackupRequest, Backup>;
    /** Retrieves the list of MySQL backups available for the specified folder. */
    list: handleUnaryCall<ListBackupsRequest, ListBackupsResponse>;
}
export interface BackupServiceClient extends Client {
    /**
     * Returns the specified MySQL backup.
     *
     * To get the list of available MySQL backups, make a [List] request.
     */
    get(request: GetBackupRequest, callback: (error: ServiceError | null, response: Backup) => void): ClientUnaryCall;
    get(request: GetBackupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Backup) => void): ClientUnaryCall;
    get(request: GetBackupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Backup) => void): ClientUnaryCall;
    /** Retrieves the list of MySQL backups available for the specified folder. */
    list(request: ListBackupsRequest, callback: (error: ServiceError | null, response: ListBackupsResponse) => void): ClientUnaryCall;
    list(request: ListBackupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListBackupsResponse) => void): ClientUnaryCall;
    list(request: ListBackupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListBackupsResponse) => void): ClientUnaryCall;
}
export declare const BackupServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => BackupServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
