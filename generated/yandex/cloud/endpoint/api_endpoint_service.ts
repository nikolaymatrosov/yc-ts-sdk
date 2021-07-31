/* eslint-disable */
import { ApiEndpoint } from '../../../yandex/cloud/endpoint/api_endpoint';
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

export const protobufPackage = 'yandex.cloud.endpoint';

export interface GetApiEndpointRequest {
    apiEndpointId: string;
}

export interface ListApiEndpointsRequest {
    pageSize: number;
    pageToken: string;
}

export interface ListApiEndpointsResponse {
    endpoints: ApiEndpoint[];
    nextPageToken: string;
}

const baseGetApiEndpointRequest: object = { apiEndpointId: '' };

export const GetApiEndpointRequest = {
    encode(
        message: GetApiEndpointRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.apiEndpointId !== '') {
            writer.uint32(10).string(message.apiEndpointId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetApiEndpointRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetApiEndpointRequest,
        } as GetApiEndpointRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiEndpointId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetApiEndpointRequest {
        const message = {
            ...baseGetApiEndpointRequest,
        } as GetApiEndpointRequest;
        if (
            object.apiEndpointId !== undefined &&
            object.apiEndpointId !== null
        ) {
            message.apiEndpointId = String(object.apiEndpointId);
        } else {
            message.apiEndpointId = '';
        }
        return message;
    },

    toJSON(message: GetApiEndpointRequest): unknown {
        const obj: any = {};
        message.apiEndpointId !== undefined &&
            (obj.apiEndpointId = message.apiEndpointId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetApiEndpointRequest>
    ): GetApiEndpointRequest {
        const message = {
            ...baseGetApiEndpointRequest,
        } as GetApiEndpointRequest;
        if (
            object.apiEndpointId !== undefined &&
            object.apiEndpointId !== null
        ) {
            message.apiEndpointId = object.apiEndpointId;
        } else {
            message.apiEndpointId = '';
        }
        return message;
    },
};

const baseListApiEndpointsRequest: object = { pageSize: 0, pageToken: '' };

export const ListApiEndpointsRequest = {
    encode(
        message: ListApiEndpointsRequest,
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
    ): ListApiEndpointsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListApiEndpointsRequest,
        } as ListApiEndpointsRequest;
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

    fromJSON(object: any): ListApiEndpointsRequest {
        const message = {
            ...baseListApiEndpointsRequest,
        } as ListApiEndpointsRequest;
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

    toJSON(message: ListApiEndpointsRequest): unknown {
        const obj: any = {};
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListApiEndpointsRequest>
    ): ListApiEndpointsRequest {
        const message = {
            ...baseListApiEndpointsRequest,
        } as ListApiEndpointsRequest;
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

const baseListApiEndpointsResponse: object = { nextPageToken: '' };

export const ListApiEndpointsResponse = {
    encode(
        message: ListApiEndpointsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.endpoints) {
            ApiEndpoint.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListApiEndpointsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListApiEndpointsResponse,
        } as ListApiEndpointsResponse;
        message.endpoints = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.endpoints.push(
                        ApiEndpoint.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListApiEndpointsResponse {
        const message = {
            ...baseListApiEndpointsResponse,
        } as ListApiEndpointsResponse;
        message.endpoints = [];
        if (object.endpoints !== undefined && object.endpoints !== null) {
            for (const e of object.endpoints) {
                message.endpoints.push(ApiEndpoint.fromJSON(e));
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

    toJSON(message: ListApiEndpointsResponse): unknown {
        const obj: any = {};
        if (message.endpoints) {
            obj.endpoints = message.endpoints.map((e) =>
                e ? ApiEndpoint.toJSON(e) : undefined
            );
        } else {
            obj.endpoints = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListApiEndpointsResponse>
    ): ListApiEndpointsResponse {
        const message = {
            ...baseListApiEndpointsResponse,
        } as ListApiEndpointsResponse;
        message.endpoints = [];
        if (object.endpoints !== undefined && object.endpoints !== null) {
            for (const e of object.endpoints) {
                message.endpoints.push(ApiEndpoint.fromPartial(e));
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

export const ApiEndpointServiceService = {
    get: {
        path: '/yandex.cloud.endpoint.ApiEndpointService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetApiEndpointRequest) =>
            Buffer.from(GetApiEndpointRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetApiEndpointRequest.decode(value),
        responseSerialize: (value: ApiEndpoint) =>
            Buffer.from(ApiEndpoint.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ApiEndpoint.decode(value),
    },
    list: {
        path: '/yandex.cloud.endpoint.ApiEndpointService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListApiEndpointsRequest) =>
            Buffer.from(ListApiEndpointsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListApiEndpointsRequest.decode(value),
        responseSerialize: (value: ListApiEndpointsResponse) =>
            Buffer.from(ListApiEndpointsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListApiEndpointsResponse.decode(value),
    },
} as const;

export interface ApiEndpointServiceServer extends UntypedServiceImplementation {
    get: handleUnaryCall<GetApiEndpointRequest, ApiEndpoint>;
    list: handleUnaryCall<ListApiEndpointsRequest, ListApiEndpointsResponse>;
}

export interface ApiEndpointServiceClient extends Client {
    get(
        request: GetApiEndpointRequest,
        callback: (error: ServiceError | null, response: ApiEndpoint) => void
    ): ClientUnaryCall;
    get(
        request: GetApiEndpointRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ApiEndpoint) => void
    ): ClientUnaryCall;
    get(
        request: GetApiEndpointRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ApiEndpoint) => void
    ): ClientUnaryCall;
    list(
        request: ListApiEndpointsRequest,
        callback: (
            error: ServiceError | null,
            response: ListApiEndpointsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListApiEndpointsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListApiEndpointsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListApiEndpointsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListApiEndpointsResponse
        ) => void
    ): ClientUnaryCall;
}

export const ApiEndpointServiceClient = makeGenericClientConstructor(
    ApiEndpointServiceService,
    'yandex.cloud.endpoint.ApiEndpointService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): ApiEndpointServiceClient;
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