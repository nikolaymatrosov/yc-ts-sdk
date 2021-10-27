/* eslint-disable */
import { messageTypeRegistry } from '../../../../../typeRegistry';
import { Backup } from '../../../../../yandex/cloud/mdb/postgresql/v1/backup';
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

export const protobufPackage = 'yandex.cloud.mdb.postgresql.v1';

export interface GetBackupRequest {
    $type: 'yandex.cloud.mdb.postgresql.v1.GetBackupRequest';
    /**
     * ID of the backup to return information about.
     * To get the backup ID, use a [ClusterService.ListBackups] request.
     */
    backupId: string;
}

export interface ListBackupsRequest {
    $type: 'yandex.cloud.mdb.postgresql.v1.ListBackupsRequest';
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
    $type: 'yandex.cloud.mdb.postgresql.v1.ListBackupsResponse';
    /** List of PostgreSQL Backup resources. */
    backups: Backup[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListBackupsRequest.page_size], use the [next_page_token] as the value
     * for the [ListBackupsRequest.page_token] parameter in the next list request. Each subsequent
     * list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetBackupRequest: object = {
    $type: 'yandex.cloud.mdb.postgresql.v1.GetBackupRequest',
    backupId: '',
};

export const GetBackupRequest = {
    $type: 'yandex.cloud.mdb.postgresql.v1.GetBackupRequest' as const,

    encode(
        message: GetBackupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.backupId !== '') {
            writer.uint32(10).string(message.backupId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetBackupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetBackupRequest } as GetBackupRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetBackupRequest {
        const message = { ...baseGetBackupRequest } as GetBackupRequest;
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = String(object.backupId);
        } else {
            message.backupId = '';
        }
        return message;
    },

    toJSON(message: GetBackupRequest): unknown {
        const obj: any = {};
        message.backupId !== undefined && (obj.backupId = message.backupId);
        return obj;
    },

    fromPartial(object: DeepPartial<GetBackupRequest>): GetBackupRequest {
        const message = { ...baseGetBackupRequest } as GetBackupRequest;
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = object.backupId;
        } else {
            message.backupId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(GetBackupRequest.$type, GetBackupRequest);

const baseListBackupsRequest: object = {
    $type: 'yandex.cloud.mdb.postgresql.v1.ListBackupsRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListBackupsRequest = {
    $type: 'yandex.cloud.mdb.postgresql.v1.ListBackupsRequest' as const,

    encode(
        message: ListBackupsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
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
    ): ListBackupsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListBackupsRequest } as ListBackupsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
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

    fromJSON(object: any): ListBackupsRequest {
        const message = { ...baseListBackupsRequest } as ListBackupsRequest;
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
        return message;
    },

    toJSON(message: ListBackupsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(object: DeepPartial<ListBackupsRequest>): ListBackupsRequest {
        const message = { ...baseListBackupsRequest } as ListBackupsRequest;
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
        return message;
    },
};

messageTypeRegistry.set(ListBackupsRequest.$type, ListBackupsRequest);

const baseListBackupsResponse: object = {
    $type: 'yandex.cloud.mdb.postgresql.v1.ListBackupsResponse',
    nextPageToken: '',
};

export const ListBackupsResponse = {
    $type: 'yandex.cloud.mdb.postgresql.v1.ListBackupsResponse' as const,

    encode(
        message: ListBackupsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.backups) {
            Backup.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListBackupsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListBackupsResponse } as ListBackupsResponse;
        message.backups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backups.push(
                        Backup.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListBackupsResponse {
        const message = { ...baseListBackupsResponse } as ListBackupsResponse;
        message.backups = [];
        if (object.backups !== undefined && object.backups !== null) {
            for (const e of object.backups) {
                message.backups.push(Backup.fromJSON(e));
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

    toJSON(message: ListBackupsResponse): unknown {
        const obj: any = {};
        if (message.backups) {
            obj.backups = message.backups.map((e) =>
                e ? Backup.toJSON(e) : undefined
            );
        } else {
            obj.backups = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(object: DeepPartial<ListBackupsResponse>): ListBackupsResponse {
        const message = { ...baseListBackupsResponse } as ListBackupsResponse;
        message.backups = [];
        if (object.backups !== undefined && object.backups !== null) {
            for (const e of object.backups) {
                message.backups.push(Backup.fromPartial(e));
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

messageTypeRegistry.set(ListBackupsResponse.$type, ListBackupsResponse);

/** A set of methods for managing PostgreSQL Backup resources. */
export const BackupServiceService = {
    /**
     * Returns the specified PostgreSQL Backup resource.
     *
     * To get the list of available PostgreSQL Backup resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.mdb.postgresql.v1.BackupService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetBackupRequest) =>
            Buffer.from(GetBackupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetBackupRequest.decode(value),
        responseSerialize: (value: Backup) =>
            Buffer.from(Backup.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Backup.decode(value),
    },
    /** Retrieves the list of Backup resources available for the specified folder. */
    list: {
        path: '/yandex.cloud.mdb.postgresql.v1.BackupService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListBackupsRequest) =>
            Buffer.from(ListBackupsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListBackupsRequest.decode(value),
        responseSerialize: (value: ListBackupsResponse) =>
            Buffer.from(ListBackupsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListBackupsResponse.decode(value),
    },
} as const;

export interface BackupServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified PostgreSQL Backup resource.
     *
     * To get the list of available PostgreSQL Backup resources, make a [List] request.
     */
    get: handleUnaryCall<GetBackupRequest, Backup>;
    /** Retrieves the list of Backup resources available for the specified folder. */
    list: handleUnaryCall<ListBackupsRequest, ListBackupsResponse>;
}

export interface BackupServiceClient extends Client {
    /**
     * Returns the specified PostgreSQL Backup resource.
     *
     * To get the list of available PostgreSQL Backup resources, make a [List] request.
     */
    get(
        request: GetBackupRequest,
        callback: (error: ServiceError | null, response: Backup) => void
    ): ClientUnaryCall;
    get(
        request: GetBackupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Backup) => void
    ): ClientUnaryCall;
    get(
        request: GetBackupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Backup) => void
    ): ClientUnaryCall;
    /** Retrieves the list of Backup resources available for the specified folder. */
    list(
        request: ListBackupsRequest,
        callback: (
            error: ServiceError | null,
            response: ListBackupsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListBackupsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListBackupsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListBackupsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListBackupsResponse
        ) => void
    ): ClientUnaryCall;
}

export const BackupServiceClient = makeGenericClientConstructor(
    BackupServiceService,
    'yandex.cloud.mdb.postgresql.v1.BackupService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): BackupServiceClient;
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
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
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
