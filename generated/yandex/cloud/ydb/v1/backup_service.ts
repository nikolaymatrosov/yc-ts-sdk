/* eslint-disable */
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { Backup } from '../../../../yandex/cloud/ydb/v1/backup';
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

export const protobufPackage = 'yandex.cloud.ydb.v1';

export interface ListPathsRequest {
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
    paths: string[];
    nextPageToken: string;
}

export interface GetBackupRequest {
    /** Required. ID of the YDB backup. */
    backupId: string;
}

export interface ListBackupsRequest {
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
    backupId: string;
}

export interface DeleteBackupMetadata {
    backupId: string;
    databaseId: string;
}

const baseListPathsRequest: object = {
    backupId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListPathsRequest = {
    encode(
        message: ListPathsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.backupId !== '') {
            writer.uint32(10).string(message.backupId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPathsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListPathsRequest } as ListPathsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupId = reader.string();
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

    fromJSON(object: any): ListPathsRequest {
        const message = { ...baseListPathsRequest } as ListPathsRequest;
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = String(object.backupId);
        } else {
            message.backupId = '';
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

    toJSON(message: ListPathsRequest): unknown {
        const obj: any = {};
        message.backupId !== undefined && (obj.backupId = message.backupId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(object: DeepPartial<ListPathsRequest>): ListPathsRequest {
        const message = { ...baseListPathsRequest } as ListPathsRequest;
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = object.backupId;
        } else {
            message.backupId = '';
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

const baseListPathsResponse: object = { paths: '', nextPageToken: '' };

export const ListPathsResponse = {
    encode(
        message: ListPathsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.paths) {
            writer.uint32(10).string(v!);
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ListPathsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListPathsResponse } as ListPathsResponse;
        message.paths = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.paths.push(reader.string());
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

    fromJSON(object: any): ListPathsResponse {
        const message = { ...baseListPathsResponse } as ListPathsResponse;
        message.paths = [];
        if (object.paths !== undefined && object.paths !== null) {
            for (const e of object.paths) {
                message.paths.push(String(e));
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

    toJSON(message: ListPathsResponse): unknown {
        const obj: any = {};
        if (message.paths) {
            obj.paths = message.paths.map((e) => e);
        } else {
            obj.paths = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(object: DeepPartial<ListPathsResponse>): ListPathsResponse {
        const message = { ...baseListPathsResponse } as ListPathsResponse;
        message.paths = [];
        if (object.paths !== undefined && object.paths !== null) {
            for (const e of object.paths) {
                message.paths.push(e);
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

const baseGetBackupRequest: object = { backupId: '' };

export const GetBackupRequest = {
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

const baseListBackupsRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListBackupsRequest = {
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

const baseListBackupsResponse: object = { nextPageToken: '' };

export const ListBackupsResponse = {
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

const baseDeleteBackupRequest: object = { backupId: '' };

export const DeleteBackupRequest = {
    encode(
        message: DeleteBackupRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.backupId !== '') {
            writer.uint32(10).string(message.backupId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteBackupRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteBackupRequest } as DeleteBackupRequest;
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

    fromJSON(object: any): DeleteBackupRequest {
        const message = { ...baseDeleteBackupRequest } as DeleteBackupRequest;
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = String(object.backupId);
        } else {
            message.backupId = '';
        }
        return message;
    },

    toJSON(message: DeleteBackupRequest): unknown {
        const obj: any = {};
        message.backupId !== undefined && (obj.backupId = message.backupId);
        return obj;
    },

    fromPartial(object: DeepPartial<DeleteBackupRequest>): DeleteBackupRequest {
        const message = { ...baseDeleteBackupRequest } as DeleteBackupRequest;
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = object.backupId;
        } else {
            message.backupId = '';
        }
        return message;
    },
};

const baseDeleteBackupMetadata: object = { backupId: '', databaseId: '' };

export const DeleteBackupMetadata = {
    encode(
        message: DeleteBackupMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.backupId !== '') {
            writer.uint32(10).string(message.backupId);
        }
        if (message.databaseId !== '') {
            writer.uint32(18).string(message.databaseId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteBackupMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteBackupMetadata } as DeleteBackupMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backupId = reader.string();
                    break;
                case 2:
                    message.databaseId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteBackupMetadata {
        const message = { ...baseDeleteBackupMetadata } as DeleteBackupMetadata;
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = String(object.backupId);
        } else {
            message.backupId = '';
        }
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = String(object.databaseId);
        } else {
            message.databaseId = '';
        }
        return message;
    },

    toJSON(message: DeleteBackupMetadata): unknown {
        const obj: any = {};
        message.backupId !== undefined && (obj.backupId = message.backupId);
        message.databaseId !== undefined &&
            (obj.databaseId = message.databaseId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteBackupMetadata>
    ): DeleteBackupMetadata {
        const message = { ...baseDeleteBackupMetadata } as DeleteBackupMetadata;
        if (object.backupId !== undefined && object.backupId !== null) {
            message.backupId = object.backupId;
        } else {
            message.backupId = '';
        }
        if (object.databaseId !== undefined && object.databaseId !== null) {
            message.databaseId = object.databaseId;
        } else {
            message.databaseId = '';
        }
        return message;
    },
};

/** A set of methods for managing backups. */
export const BackupServiceService = {
    /** Returns the specified backup. */
    get: {
        path: '/yandex.cloud.ydb.v1.BackupService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetBackupRequest) =>
            Buffer.from(GetBackupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetBackupRequest.decode(value),
        responseSerialize: (value: Backup) =>
            Buffer.from(Backup.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Backup.decode(value),
    },
    listPaths: {
        path: '/yandex.cloud.ydb.v1.BackupService/ListPaths',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListPathsRequest) =>
            Buffer.from(ListPathsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListPathsRequest.decode(value),
        responseSerialize: (value: ListPathsResponse) =>
            Buffer.from(ListPathsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ListPathsResponse.decode(value),
    },
    /** Retrieves a list of backups. */
    list: {
        path: '/yandex.cloud.ydb.v1.BackupService/List',
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
    /** Deletes the specified backup. */
    delete: {
        path: '/yandex.cloud.ydb.v1.BackupService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteBackupRequest) =>
            Buffer.from(DeleteBackupRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteBackupRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

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
    listPaths(
        request: ListPathsRequest,
        callback: (
            error: ServiceError | null,
            response: ListPathsResponse
        ) => void
    ): ClientUnaryCall;
    listPaths(
        request: ListPathsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListPathsResponse
        ) => void
    ): ClientUnaryCall;
    listPaths(
        request: ListPathsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListPathsResponse
        ) => void
    ): ClientUnaryCall;
    /** Retrieves a list of backups. */
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
    /** Deletes the specified backup. */
    delete(
        request: DeleteBackupRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteBackupRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteBackupRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
}

export const BackupServiceClient = makeGenericClientConstructor(
    BackupServiceService,
    'yandex.cloud.ydb.v1.BackupService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): BackupServiceClient;
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