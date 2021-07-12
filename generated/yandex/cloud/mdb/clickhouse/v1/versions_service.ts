/* eslint-disable */
import { Version } from '../../../../../yandex/cloud/mdb/clickhouse/v1/version';
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

export interface ListVersionsRequest {
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListVersionsResponse.next_page_token] that can be used
     * to get the next page of results in subsequent ListVersions requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token] to the [ListVersionsResponse.next_page_token] returned by a previous ListVersions
     * request to get the next page of results.
     */
    pageToken: string;
}

export interface ListVersionsResponse {
    /** Requested list of available versions. */
    version: Version[];
    /**
     * This token allows you to get the next page of results for ListVersions requests,
     * if the number of results is larger than [ListVersionsRequest.page_size] specified in the request.
     * To get the next page, specify the value of [next_page_token] as a value for
     * the [ListVersionsRequest.page_token] parameter in the next ListVerions request. Subsequent ListVersions
     * requests will have their own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseListVersionsRequest: object = { pageSize: 0, pageToken: '' };

export const ListVersionsRequest = {
    encode(
        message: ListVersionsRequest,
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
    ): ListVersionsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListVersionsRequest } as ListVersionsRequest;
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

    fromJSON(object: any): ListVersionsRequest {
        const message = { ...baseListVersionsRequest } as ListVersionsRequest;
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

    toJSON(message: ListVersionsRequest): unknown {
        const obj: any = {};
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(object: DeepPartial<ListVersionsRequest>): ListVersionsRequest {
        const message = { ...baseListVersionsRequest } as ListVersionsRequest;
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

const baseListVersionsResponse: object = { nextPageToken: '' };

export const ListVersionsResponse = {
    encode(
        message: ListVersionsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.version) {
            Version.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListVersionsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListVersionsResponse } as ListVersionsResponse;
        message.version = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version.push(
                        Version.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListVersionsResponse {
        const message = { ...baseListVersionsResponse } as ListVersionsResponse;
        message.version = [];
        if (object.version !== undefined && object.version !== null) {
            for (const e of object.version) {
                message.version.push(Version.fromJSON(e));
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

    toJSON(message: ListVersionsResponse): unknown {
        const obj: any = {};
        if (message.version) {
            obj.version = message.version.map((e) =>
                e ? Version.toJSON(e) : undefined
            );
        } else {
            obj.version = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListVersionsResponse>
    ): ListVersionsResponse {
        const message = { ...baseListVersionsResponse } as ListVersionsResponse;
        message.version = [];
        if (object.version !== undefined && object.version !== null) {
            for (const e of object.version) {
                message.version.push(Version.fromPartial(e));
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

/** A set of methods for managing ClickHouse versions. */
export const VersionsServiceService = {
    /** Returns list of available ClickHouse versions. */
    list: {
        path: '/yandex.cloud.mdb.clickhouse.v1.VersionsService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListVersionsRequest) =>
            Buffer.from(ListVersionsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListVersionsRequest.decode(value),
        responseSerialize: (value: ListVersionsResponse) =>
            Buffer.from(ListVersionsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListVersionsResponse.decode(value),
    },
} as const;

export interface VersionsServiceServer extends UntypedServiceImplementation {
    /** Returns list of available ClickHouse versions. */
    list: handleUnaryCall<ListVersionsRequest, ListVersionsResponse>;
}

export interface VersionsServiceClient extends Client {
    /** Returns list of available ClickHouse versions. */
    list(
        request: ListVersionsRequest,
        callback: (
            error: ServiceError | null,
            response: ListVersionsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListVersionsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListVersionsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListVersionsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListVersionsResponse
        ) => void
    ): ClientUnaryCall;
}

export const VersionsServiceClient = makeGenericClientConstructor(
    VersionsServiceService,
    'yandex.cloud.mdb.clickhouse.v1.VersionsService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): VersionsServiceClient;
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
