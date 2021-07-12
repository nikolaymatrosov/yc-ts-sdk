/* eslint-disable */
import { StorageType } from '../../../../yandex/cloud/ydb/v1/storage_type';
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

export interface GetStorageTypeRequest {
    /** Required. ID of the storage type to return. */
    storageTypeId: string;
}

export interface ListStorageTypesRequest {
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a `next_page_token` that can be used
     * to get the next page of results in subsequent ListStorageTypes requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set `page_token` to the `next_page_token` returned by a previous ListStorageTypes
     * request to get the next page of results.
     */
    pageToken: string;
}

export interface ListStorageTypesResponse {
    /** Requested list of storage types. */
    storageTypes: StorageType[];
    /**
     * This token allows you to get the next page of results for ListStorageTypes requests,
     * if the number of results is larger than `page_size` specified in the request.
     * To get the next page, specify the value of `next_page_token` as a value for
     * the `page_token` parameter in the next ListStorageTypes request. Subsequent ListStorageTypes
     * requests will have their own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetStorageTypeRequest: object = { storageTypeId: '' };

export const GetStorageTypeRequest = {
    encode(
        message: GetStorageTypeRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.storageTypeId !== '') {
            writer.uint32(10).string(message.storageTypeId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetStorageTypeRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetStorageTypeRequest,
        } as GetStorageTypeRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storageTypeId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetStorageTypeRequest {
        const message = {
            ...baseGetStorageTypeRequest,
        } as GetStorageTypeRequest;
        if (
            object.storageTypeId !== undefined &&
            object.storageTypeId !== null
        ) {
            message.storageTypeId = String(object.storageTypeId);
        } else {
            message.storageTypeId = '';
        }
        return message;
    },

    toJSON(message: GetStorageTypeRequest): unknown {
        const obj: any = {};
        message.storageTypeId !== undefined &&
            (obj.storageTypeId = message.storageTypeId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetStorageTypeRequest>
    ): GetStorageTypeRequest {
        const message = {
            ...baseGetStorageTypeRequest,
        } as GetStorageTypeRequest;
        if (
            object.storageTypeId !== undefined &&
            object.storageTypeId !== null
        ) {
            message.storageTypeId = object.storageTypeId;
        } else {
            message.storageTypeId = '';
        }
        return message;
    },
};

const baseListStorageTypesRequest: object = { pageSize: 0, pageToken: '' };

export const ListStorageTypesRequest = {
    encode(
        message: ListStorageTypesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.pageSize !== 0) {
            writer.uint32(8).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(18).string(message.pageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListStorageTypesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListStorageTypesRequest,
        } as ListStorageTypesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListStorageTypesRequest {
        const message = {
            ...baseListStorageTypesRequest,
        } as ListStorageTypesRequest;
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

    toJSON(message: ListStorageTypesRequest): unknown {
        const obj: any = {};
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListStorageTypesRequest>
    ): ListStorageTypesRequest {
        const message = {
            ...baseListStorageTypesRequest,
        } as ListStorageTypesRequest;
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

const baseListStorageTypesResponse: object = { nextPageToken: '' };

export const ListStorageTypesResponse = {
    encode(
        message: ListStorageTypesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.storageTypes) {
            StorageType.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListStorageTypesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListStorageTypesResponse,
        } as ListStorageTypesResponse;
        message.storageTypes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storageTypes.push(
                        StorageType.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListStorageTypesResponse {
        const message = {
            ...baseListStorageTypesResponse,
        } as ListStorageTypesResponse;
        message.storageTypes = [];
        if (object.storageTypes !== undefined && object.storageTypes !== null) {
            for (const e of object.storageTypes) {
                message.storageTypes.push(StorageType.fromJSON(e));
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

    toJSON(message: ListStorageTypesResponse): unknown {
        const obj: any = {};
        if (message.storageTypes) {
            obj.storageTypes = message.storageTypes.map((e) =>
                e ? StorageType.toJSON(e) : undefined
            );
        } else {
            obj.storageTypes = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListStorageTypesResponse>
    ): ListStorageTypesResponse {
        const message = {
            ...baseListStorageTypesResponse,
        } as ListStorageTypesResponse;
        message.storageTypes = [];
        if (object.storageTypes !== undefined && object.storageTypes !== null) {
            for (const e of object.storageTypes) {
                message.storageTypes.push(StorageType.fromPartial(e));
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

export const StorageTypeServiceService = {
    /** Returns the specified storage types. */
    get: {
        path: '/yandex.cloud.ydb.v1.StorageTypeService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetStorageTypeRequest) =>
            Buffer.from(GetStorageTypeRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetStorageTypeRequest.decode(value),
        responseSerialize: (value: StorageType) =>
            Buffer.from(StorageType.encode(value).finish()),
        responseDeserialize: (value: Buffer) => StorageType.decode(value),
    },
    /** Returns the list of available storage types. */
    list: {
        path: '/yandex.cloud.ydb.v1.StorageTypeService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListStorageTypesRequest) =>
            Buffer.from(ListStorageTypesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListStorageTypesRequest.decode(value),
        responseSerialize: (value: ListStorageTypesResponse) =>
            Buffer.from(ListStorageTypesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListStorageTypesResponse.decode(value),
    },
} as const;

export interface StorageTypeServiceServer extends UntypedServiceImplementation {
    /** Returns the specified storage types. */
    get: handleUnaryCall<GetStorageTypeRequest, StorageType>;
    /** Returns the list of available storage types. */
    list: handleUnaryCall<ListStorageTypesRequest, ListStorageTypesResponse>;
}

export interface StorageTypeServiceClient extends Client {
    /** Returns the specified storage types. */
    get(
        request: GetStorageTypeRequest,
        callback: (error: ServiceError | null, response: StorageType) => void
    ): ClientUnaryCall;
    get(
        request: GetStorageTypeRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: StorageType) => void
    ): ClientUnaryCall;
    get(
        request: GetStorageTypeRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: StorageType) => void
    ): ClientUnaryCall;
    /** Returns the list of available storage types. */
    list(
        request: ListStorageTypesRequest,
        callback: (
            error: ServiceError | null,
            response: ListStorageTypesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListStorageTypesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListStorageTypesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListStorageTypesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListStorageTypesResponse
        ) => void
    ): ClientUnaryCall;
}

export const StorageTypeServiceClient = makeGenericClientConstructor(
    StorageTypeServiceService,
    'yandex.cloud.ydb.v1.StorageTypeService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): StorageTypeServiceClient;
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
