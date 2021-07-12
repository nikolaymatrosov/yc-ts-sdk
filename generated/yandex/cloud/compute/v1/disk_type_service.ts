/* eslint-disable */
import { DiskType } from '../../../../yandex/cloud/compute/v1/disk_type';
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

export const protobufPackage = 'yandex.cloud.compute.v1';

export interface GetDiskTypeRequest {
    /**
     * ID of the disk type to return information about.
     * To get the disk type ID use a [DiskTypeService.List] request.
     */
    diskTypeId: string;
}

export interface ListDiskTypesRequest {
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListDiskTypesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListDiskTypesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListDiskTypesResponse {
    /** List of disk types. */
    diskTypes: DiskType[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListDiskTypesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListDiskTypesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetDiskTypeRequest: object = { diskTypeId: '' };

export const GetDiskTypeRequest = {
    encode(
        message: GetDiskTypeRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.diskTypeId !== '') {
            writer.uint32(10).string(message.diskTypeId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetDiskTypeRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetDiskTypeRequest } as GetDiskTypeRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskTypeId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetDiskTypeRequest {
        const message = { ...baseGetDiskTypeRequest } as GetDiskTypeRequest;
        if (object.diskTypeId !== undefined && object.diskTypeId !== null) {
            message.diskTypeId = String(object.diskTypeId);
        } else {
            message.diskTypeId = '';
        }
        return message;
    },

    toJSON(message: GetDiskTypeRequest): unknown {
        const obj: any = {};
        message.diskTypeId !== undefined &&
            (obj.diskTypeId = message.diskTypeId);
        return obj;
    },

    fromPartial(object: DeepPartial<GetDiskTypeRequest>): GetDiskTypeRequest {
        const message = { ...baseGetDiskTypeRequest } as GetDiskTypeRequest;
        if (object.diskTypeId !== undefined && object.diskTypeId !== null) {
            message.diskTypeId = object.diskTypeId;
        } else {
            message.diskTypeId = '';
        }
        return message;
    },
};

const baseListDiskTypesRequest: object = { pageSize: 0, pageToken: '' };

export const ListDiskTypesRequest = {
    encode(
        message: ListDiskTypesRequest,
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
    ): ListDiskTypesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListDiskTypesRequest } as ListDiskTypesRequest;
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

    fromJSON(object: any): ListDiskTypesRequest {
        const message = { ...baseListDiskTypesRequest } as ListDiskTypesRequest;
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

    toJSON(message: ListDiskTypesRequest): unknown {
        const obj: any = {};
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListDiskTypesRequest>
    ): ListDiskTypesRequest {
        const message = { ...baseListDiskTypesRequest } as ListDiskTypesRequest;
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

const baseListDiskTypesResponse: object = { nextPageToken: '' };

export const ListDiskTypesResponse = {
    encode(
        message: ListDiskTypesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.diskTypes) {
            DiskType.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListDiskTypesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListDiskTypesResponse,
        } as ListDiskTypesResponse;
        message.diskTypes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.diskTypes.push(
                        DiskType.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListDiskTypesResponse {
        const message = {
            ...baseListDiskTypesResponse,
        } as ListDiskTypesResponse;
        message.diskTypes = [];
        if (object.diskTypes !== undefined && object.diskTypes !== null) {
            for (const e of object.diskTypes) {
                message.diskTypes.push(DiskType.fromJSON(e));
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

    toJSON(message: ListDiskTypesResponse): unknown {
        const obj: any = {};
        if (message.diskTypes) {
            obj.diskTypes = message.diskTypes.map((e) =>
                e ? DiskType.toJSON(e) : undefined
            );
        } else {
            obj.diskTypes = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListDiskTypesResponse>
    ): ListDiskTypesResponse {
        const message = {
            ...baseListDiskTypesResponse,
        } as ListDiskTypesResponse;
        message.diskTypes = [];
        if (object.diskTypes !== undefined && object.diskTypes !== null) {
            for (const e of object.diskTypes) {
                message.diskTypes.push(DiskType.fromPartial(e));
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

/** A set of methods to retrieve information about disk types. */
export const DiskTypeServiceService = {
    /**
     * Returns the information about specified disk type.
     *
     * To get the list of available disk types, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.compute.v1.DiskTypeService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetDiskTypeRequest) =>
            Buffer.from(GetDiskTypeRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetDiskTypeRequest.decode(value),
        responseSerialize: (value: DiskType) =>
            Buffer.from(DiskType.encode(value).finish()),
        responseDeserialize: (value: Buffer) => DiskType.decode(value),
    },
    /** Retrieves the list of disk types for the specified folder. */
    list: {
        path: '/yandex.cloud.compute.v1.DiskTypeService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListDiskTypesRequest) =>
            Buffer.from(ListDiskTypesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListDiskTypesRequest.decode(value),
        responseSerialize: (value: ListDiskTypesResponse) =>
            Buffer.from(ListDiskTypesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListDiskTypesResponse.decode(value),
    },
} as const;

export interface DiskTypeServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the information about specified disk type.
     *
     * To get the list of available disk types, make a [List] request.
     */
    get: handleUnaryCall<GetDiskTypeRequest, DiskType>;
    /** Retrieves the list of disk types for the specified folder. */
    list: handleUnaryCall<ListDiskTypesRequest, ListDiskTypesResponse>;
}

export interface DiskTypeServiceClient extends Client {
    /**
     * Returns the information about specified disk type.
     *
     * To get the list of available disk types, make a [List] request.
     */
    get(
        request: GetDiskTypeRequest,
        callback: (error: ServiceError | null, response: DiskType) => void
    ): ClientUnaryCall;
    get(
        request: GetDiskTypeRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: DiskType) => void
    ): ClientUnaryCall;
    get(
        request: GetDiskTypeRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: DiskType) => void
    ): ClientUnaryCall;
    /** Retrieves the list of disk types for the specified folder. */
    list(
        request: ListDiskTypesRequest,
        callback: (
            error: ServiceError | null,
            response: ListDiskTypesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListDiskTypesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListDiskTypesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListDiskTypesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListDiskTypesResponse
        ) => void
    ): ClientUnaryCall;
}

export const DiskTypeServiceClient = makeGenericClientConstructor(
    DiskTypeServiceService,
    'yandex.cloud.compute.v1.DiskTypeService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): DiskTypeServiceClient;
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
