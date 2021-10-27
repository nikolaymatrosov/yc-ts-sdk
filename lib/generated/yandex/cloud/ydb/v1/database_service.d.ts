/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { BackupSettings, BackupConfig } from '../../../../yandex/cloud/ydb/v1/backup';
import { Database, StorageConfig, ScalePolicy, ZonalDatabase, RegionalDatabase, DedicatedDatabase, ServerlessDatabase, MonitoringConfig } from '../../../../yandex/cloud/ydb/v1/database';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.ydb.v1";
export interface RestoreBackupRequest {
    $type: 'yandex.cloud.ydb.v1.RestoreBackupRequest';
    /** Required. ID of the YDB backup. */
    backupId: string;
    /** Required. ID of the YDB database. */
    databaseId: string;
    /**
     * Specify paths to restore.
     * If empty, all paths will restored by default.
     */
    pathsToRestore: string[];
    /** Specify target path. */
    targetPath: string;
}
export interface RestoreBackupMetadata {
    $type: 'yandex.cloud.ydb.v1.RestoreBackupMetadata';
    backupId: string;
    databaseId: string;
}
export interface BackupDatabaseRequest {
    $type: 'yandex.cloud.ydb.v1.BackupDatabaseRequest';
    databaseId: string;
    /** custom backup options, if required. */
    backupSettings: BackupSettings | undefined;
}
export interface BackupDatabaseMetadata {
    $type: 'yandex.cloud.ydb.v1.BackupDatabaseMetadata';
    backupId: string;
    databaseId: string;
}
export interface StartDatabaseRequest {
    $type: 'yandex.cloud.ydb.v1.StartDatabaseRequest';
    databaseId: string;
}
export interface StartDatabaseMetadata {
    $type: 'yandex.cloud.ydb.v1.StartDatabaseMetadata';
    databaseId: string;
    databaseName: string;
}
export interface StopDatabaseRequest {
    $type: 'yandex.cloud.ydb.v1.StopDatabaseRequest';
    databaseId: string;
}
export interface StopDatabaseMetadata {
    $type: 'yandex.cloud.ydb.v1.StopDatabaseMetadata';
    databaseId: string;
    databaseName: string;
}
export interface GetDatabaseRequest {
    $type: 'yandex.cloud.ydb.v1.GetDatabaseRequest';
    /** Required. ID of the YDB cluster. */
    databaseId: string;
}
export interface ListDatabasesRequest {
    $type: 'yandex.cloud.ydb.v1.ListDatabasesRequest';
    folderId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a `next_page_token` that can be used
     * to get the next page of results in subsequent ListDatabases requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set `page_token` to the `next_page_token` returned by a previous ListDatabases
     * request to get the next page of results.
     */
    pageToken: string;
}
export interface ListDatabasesResponse {
    $type: 'yandex.cloud.ydb.v1.ListDatabasesResponse';
    databases: Database[];
    /**
     * This token allows you to get the next page of results for ListDatabases requests,
     * if the number of results is larger than `page_size` specified in the request.
     * To get the next page, specify the value of `next_page_token` as a value for
     * the `page_token` parameter in the next ListDatabases request. Subsequent ListDatabases
     * requests will have their own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateDatabaseRequest {
    $type: 'yandex.cloud.ydb.v1.CreateDatabaseRequest';
    folderId: string;
    name: string;
    description: string;
    resourcePresetId: string;
    storageConfig: StorageConfig | undefined;
    scalePolicy: ScalePolicy | undefined;
    networkId: string;
    subnetIds: string[];
    /** deprecated field */
    zonalDatabase: ZonalDatabase | undefined;
    /** deprecated field */
    regionalDatabase: RegionalDatabase | undefined;
    dedicatedDatabase: DedicatedDatabase | undefined;
    serverlessDatabase: ServerlessDatabase | undefined;
    assignPublicIps: boolean;
    locationId: string;
    labels: {
        [key: string]: string;
    };
    backupConfig: BackupConfig | undefined;
    monitoringConfig: MonitoringConfig | undefined;
}
export interface CreateDatabaseRequest_LabelsEntry {
    $type: 'yandex.cloud.ydb.v1.CreateDatabaseRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface CreateDatabaseMetadata {
    $type: 'yandex.cloud.ydb.v1.CreateDatabaseMetadata';
    /** Required. ID of the YDB cluster. */
    databaseId: string;
    /** Required. Name of the creating database. */
    databaseName: string;
}
export interface UpdateDatabaseRequest {
    $type: 'yandex.cloud.ydb.v1.UpdateDatabaseRequest';
    folderId: string;
    updateMask: FieldMask | undefined;
    databaseId: string;
    name: string;
    description: string;
    resourcePresetId: string;
    storageConfig: StorageConfig | undefined;
    scalePolicy: ScalePolicy | undefined;
    networkId: string;
    subnetIds: string[];
    zonalDatabase: ZonalDatabase | undefined;
    regionalDatabase: RegionalDatabase | undefined;
    dedicatedDatabase: DedicatedDatabase | undefined;
    serverlessDatabase: ServerlessDatabase | undefined;
    assignPublicIps: boolean;
    locationId: string;
    labels: {
        [key: string]: string;
    };
    backupConfig: BackupConfig | undefined;
    monitoringConfig: MonitoringConfig | undefined;
}
export interface UpdateDatabaseRequest_LabelsEntry {
    $type: 'yandex.cloud.ydb.v1.UpdateDatabaseRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface UpdateDatabaseMetadata {
    $type: 'yandex.cloud.ydb.v1.UpdateDatabaseMetadata';
    databaseId: string;
    databaseName: string;
}
export interface DeleteDatabaseRequest {
    $type: 'yandex.cloud.ydb.v1.DeleteDatabaseRequest';
    databaseId: string;
}
export interface DeleteDatabaseMetadata {
    $type: 'yandex.cloud.ydb.v1.DeleteDatabaseMetadata';
    databaseId: string;
    databaseName: string;
}
export declare const RestoreBackupRequest: {
    $type: "yandex.cloud.ydb.v1.RestoreBackupRequest";
    encode(message: RestoreBackupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestoreBackupRequest;
    fromJSON(object: any): RestoreBackupRequest;
    toJSON(message: RestoreBackupRequest): unknown;
    fromPartial(object: DeepPartial<RestoreBackupRequest>): RestoreBackupRequest;
};
export declare const RestoreBackupMetadata: {
    $type: "yandex.cloud.ydb.v1.RestoreBackupMetadata";
    encode(message: RestoreBackupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestoreBackupMetadata;
    fromJSON(object: any): RestoreBackupMetadata;
    toJSON(message: RestoreBackupMetadata): unknown;
    fromPartial(object: DeepPartial<RestoreBackupMetadata>): RestoreBackupMetadata;
};
export declare const BackupDatabaseRequest: {
    $type: "yandex.cloud.ydb.v1.BackupDatabaseRequest";
    encode(message: BackupDatabaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BackupDatabaseRequest;
    fromJSON(object: any): BackupDatabaseRequest;
    toJSON(message: BackupDatabaseRequest): unknown;
    fromPartial(object: DeepPartial<BackupDatabaseRequest>): BackupDatabaseRequest;
};
export declare const BackupDatabaseMetadata: {
    $type: "yandex.cloud.ydb.v1.BackupDatabaseMetadata";
    encode(message: BackupDatabaseMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BackupDatabaseMetadata;
    fromJSON(object: any): BackupDatabaseMetadata;
    toJSON(message: BackupDatabaseMetadata): unknown;
    fromPartial(object: DeepPartial<BackupDatabaseMetadata>): BackupDatabaseMetadata;
};
export declare const StartDatabaseRequest: {
    $type: "yandex.cloud.ydb.v1.StartDatabaseRequest";
    encode(message: StartDatabaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartDatabaseRequest;
    fromJSON(object: any): StartDatabaseRequest;
    toJSON(message: StartDatabaseRequest): unknown;
    fromPartial(object: DeepPartial<StartDatabaseRequest>): StartDatabaseRequest;
};
export declare const StartDatabaseMetadata: {
    $type: "yandex.cloud.ydb.v1.StartDatabaseMetadata";
    encode(message: StartDatabaseMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartDatabaseMetadata;
    fromJSON(object: any): StartDatabaseMetadata;
    toJSON(message: StartDatabaseMetadata): unknown;
    fromPartial(object: DeepPartial<StartDatabaseMetadata>): StartDatabaseMetadata;
};
export declare const StopDatabaseRequest: {
    $type: "yandex.cloud.ydb.v1.StopDatabaseRequest";
    encode(message: StopDatabaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopDatabaseRequest;
    fromJSON(object: any): StopDatabaseRequest;
    toJSON(message: StopDatabaseRequest): unknown;
    fromPartial(object: DeepPartial<StopDatabaseRequest>): StopDatabaseRequest;
};
export declare const StopDatabaseMetadata: {
    $type: "yandex.cloud.ydb.v1.StopDatabaseMetadata";
    encode(message: StopDatabaseMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopDatabaseMetadata;
    fromJSON(object: any): StopDatabaseMetadata;
    toJSON(message: StopDatabaseMetadata): unknown;
    fromPartial(object: DeepPartial<StopDatabaseMetadata>): StopDatabaseMetadata;
};
export declare const GetDatabaseRequest: {
    $type: "yandex.cloud.ydb.v1.GetDatabaseRequest";
    encode(message: GetDatabaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDatabaseRequest;
    fromJSON(object: any): GetDatabaseRequest;
    toJSON(message: GetDatabaseRequest): unknown;
    fromPartial(object: DeepPartial<GetDatabaseRequest>): GetDatabaseRequest;
};
export declare const ListDatabasesRequest: {
    $type: "yandex.cloud.ydb.v1.ListDatabasesRequest";
    encode(message: ListDatabasesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDatabasesRequest;
    fromJSON(object: any): ListDatabasesRequest;
    toJSON(message: ListDatabasesRequest): unknown;
    fromPartial(object: DeepPartial<ListDatabasesRequest>): ListDatabasesRequest;
};
export declare const ListDatabasesResponse: {
    $type: "yandex.cloud.ydb.v1.ListDatabasesResponse";
    encode(message: ListDatabasesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDatabasesResponse;
    fromJSON(object: any): ListDatabasesResponse;
    toJSON(message: ListDatabasesResponse): unknown;
    fromPartial(object: DeepPartial<ListDatabasesResponse>): ListDatabasesResponse;
};
export declare const CreateDatabaseRequest: {
    $type: "yandex.cloud.ydb.v1.CreateDatabaseRequest";
    encode(message: CreateDatabaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDatabaseRequest;
    fromJSON(object: any): CreateDatabaseRequest;
    toJSON(message: CreateDatabaseRequest): unknown;
    fromPartial(object: DeepPartial<CreateDatabaseRequest>): CreateDatabaseRequest;
};
export declare const CreateDatabaseRequest_LabelsEntry: {
    $type: "yandex.cloud.ydb.v1.CreateDatabaseRequest.LabelsEntry";
    encode(message: CreateDatabaseRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDatabaseRequest_LabelsEntry;
    fromJSON(object: any): CreateDatabaseRequest_LabelsEntry;
    toJSON(message: CreateDatabaseRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateDatabaseRequest_LabelsEntry>): CreateDatabaseRequest_LabelsEntry;
};
export declare const CreateDatabaseMetadata: {
    $type: "yandex.cloud.ydb.v1.CreateDatabaseMetadata";
    encode(message: CreateDatabaseMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDatabaseMetadata;
    fromJSON(object: any): CreateDatabaseMetadata;
    toJSON(message: CreateDatabaseMetadata): unknown;
    fromPartial(object: DeepPartial<CreateDatabaseMetadata>): CreateDatabaseMetadata;
};
export declare const UpdateDatabaseRequest: {
    $type: "yandex.cloud.ydb.v1.UpdateDatabaseRequest";
    encode(message: UpdateDatabaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDatabaseRequest;
    fromJSON(object: any): UpdateDatabaseRequest;
    toJSON(message: UpdateDatabaseRequest): unknown;
    fromPartial(object: DeepPartial<UpdateDatabaseRequest>): UpdateDatabaseRequest;
};
export declare const UpdateDatabaseRequest_LabelsEntry: {
    $type: "yandex.cloud.ydb.v1.UpdateDatabaseRequest.LabelsEntry";
    encode(message: UpdateDatabaseRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDatabaseRequest_LabelsEntry;
    fromJSON(object: any): UpdateDatabaseRequest_LabelsEntry;
    toJSON(message: UpdateDatabaseRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateDatabaseRequest_LabelsEntry>): UpdateDatabaseRequest_LabelsEntry;
};
export declare const UpdateDatabaseMetadata: {
    $type: "yandex.cloud.ydb.v1.UpdateDatabaseMetadata";
    encode(message: UpdateDatabaseMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDatabaseMetadata;
    fromJSON(object: any): UpdateDatabaseMetadata;
    toJSON(message: UpdateDatabaseMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateDatabaseMetadata>): UpdateDatabaseMetadata;
};
export declare const DeleteDatabaseRequest: {
    $type: "yandex.cloud.ydb.v1.DeleteDatabaseRequest";
    encode(message: DeleteDatabaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDatabaseRequest;
    fromJSON(object: any): DeleteDatabaseRequest;
    toJSON(message: DeleteDatabaseRequest): unknown;
    fromPartial(object: DeepPartial<DeleteDatabaseRequest>): DeleteDatabaseRequest;
};
export declare const DeleteDatabaseMetadata: {
    $type: "yandex.cloud.ydb.v1.DeleteDatabaseMetadata";
    encode(message: DeleteDatabaseMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDatabaseMetadata;
    fromJSON(object: any): DeleteDatabaseMetadata;
    toJSON(message: DeleteDatabaseMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteDatabaseMetadata>): DeleteDatabaseMetadata;
};
/** A set of methods for managing databases. */
export declare const DatabaseServiceService: {
    /** Returns the specified database. */
    readonly get: {
        readonly path: "/yandex.cloud.ydb.v1.DatabaseService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetDatabaseRequest;
        readonly responseSerialize: (value: Database) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Database;
    };
    /** Retrieves a list of databases. */
    readonly list: {
        readonly path: "/yandex.cloud.ydb.v1.DatabaseService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDatabasesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDatabasesRequest;
        readonly responseSerialize: (value: ListDatabasesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDatabasesResponse;
    };
    /** Creates a new database. */
    readonly create: {
        readonly path: "/yandex.cloud.ydb.v1.DatabaseService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateDatabaseRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Modifies the specified database. */
    readonly update: {
        readonly path: "/yandex.cloud.ydb.v1.DatabaseService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateDatabaseRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Starts the specified database. */
    readonly start: {
        readonly path: "/yandex.cloud.ydb.v1.DatabaseService/Start";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartDatabaseRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Stops the specified database. */
    readonly stop: {
        readonly path: "/yandex.cloud.ydb.v1.DatabaseService/Stop";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopDatabaseRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified database. */
    readonly delete: {
        readonly path: "/yandex.cloud.ydb.v1.DatabaseService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteDatabaseRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Restores the specified backup */
    readonly restore: {
        readonly path: "/yandex.cloud.ydb.v1.DatabaseService/Restore";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RestoreBackupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RestoreBackupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly backup: {
        readonly path: "/yandex.cloud.ydb.v1.DatabaseService/Backup";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: BackupDatabaseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => BackupDatabaseRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface DatabaseServiceServer extends UntypedServiceImplementation {
    /** Returns the specified database. */
    get: handleUnaryCall<GetDatabaseRequest, Database>;
    /** Retrieves a list of databases. */
    list: handleUnaryCall<ListDatabasesRequest, ListDatabasesResponse>;
    /** Creates a new database. */
    create: handleUnaryCall<CreateDatabaseRequest, Operation>;
    /** Modifies the specified database. */
    update: handleUnaryCall<UpdateDatabaseRequest, Operation>;
    /** Starts the specified database. */
    start: handleUnaryCall<StartDatabaseRequest, Operation>;
    /** Stops the specified database. */
    stop: handleUnaryCall<StopDatabaseRequest, Operation>;
    /** Deletes the specified database. */
    delete: handleUnaryCall<DeleteDatabaseRequest, Operation>;
    /** Restores the specified backup */
    restore: handleUnaryCall<RestoreBackupRequest, Operation>;
    backup: handleUnaryCall<BackupDatabaseRequest, Operation>;
}
export interface DatabaseServiceClient extends Client {
    /** Returns the specified database. */
    get(request: GetDatabaseRequest, callback: (error: ServiceError | null, response: Database) => void): ClientUnaryCall;
    get(request: GetDatabaseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Database) => void): ClientUnaryCall;
    get(request: GetDatabaseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Database) => void): ClientUnaryCall;
    /** Retrieves a list of databases. */
    list(request: ListDatabasesRequest, callback: (error: ServiceError | null, response: ListDatabasesResponse) => void): ClientUnaryCall;
    list(request: ListDatabasesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDatabasesResponse) => void): ClientUnaryCall;
    list(request: ListDatabasesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDatabasesResponse) => void): ClientUnaryCall;
    /** Creates a new database. */
    create(request: CreateDatabaseRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDatabaseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDatabaseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Modifies the specified database. */
    update(request: UpdateDatabaseRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateDatabaseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateDatabaseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Starts the specified database. */
    start(request: StartDatabaseRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartDatabaseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartDatabaseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Stops the specified database. */
    stop(request: StopDatabaseRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopDatabaseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopDatabaseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified database. */
    delete(request: DeleteDatabaseRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteDatabaseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteDatabaseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Restores the specified backup */
    restore(request: RestoreBackupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restore(request: RestoreBackupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restore(request: RestoreBackupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    backup(request: BackupDatabaseRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    backup(request: BackupDatabaseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    backup(request: BackupDatabaseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const DatabaseServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => DatabaseServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
