/* eslint-disable */
import { ResourcePreset } from '../../../../../yandex/cloud/mdb/mysql/v1/resource_preset';
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

export const protobufPackage = 'yandex.cloud.mdb.mysql.v1';

export interface GetResourcePresetRequest {
    /**
     * ID of the resource preset to return.
     * To get the resource preset ID, use a [ResourcePresetService.List] request.
     */
    resourcePresetId: string;
}

export interface ListResourcePresetsRequest {
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListResourcePresetsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the [ListResourcePresetsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}

export interface ListResourcePresetsResponse {
    /** List of resource presets. */
    resourcePresets: ResourcePreset[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListResourcePresetsRequest.page_size], use the [next_page_token] as the value
     * for the [ListResourcePresetsRequest.page_token] parameter in the next list request. Each subsequent
     * list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetResourcePresetRequest: object = { resourcePresetId: '' };

export const GetResourcePresetRequest = {
    encode(
        message: GetResourcePresetRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.resourcePresetId !== '') {
            writer.uint32(10).string(message.resourcePresetId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetResourcePresetRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetResourcePresetRequest,
        } as GetResourcePresetRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourcePresetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetResourcePresetRequest {
        const message = {
            ...baseGetResourcePresetRequest,
        } as GetResourcePresetRequest;
        if (
            object.resourcePresetId !== undefined &&
            object.resourcePresetId !== null
        ) {
            message.resourcePresetId = String(object.resourcePresetId);
        } else {
            message.resourcePresetId = '';
        }
        return message;
    },

    toJSON(message: GetResourcePresetRequest): unknown {
        const obj: any = {};
        message.resourcePresetId !== undefined &&
            (obj.resourcePresetId = message.resourcePresetId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetResourcePresetRequest>
    ): GetResourcePresetRequest {
        const message = {
            ...baseGetResourcePresetRequest,
        } as GetResourcePresetRequest;
        if (
            object.resourcePresetId !== undefined &&
            object.resourcePresetId !== null
        ) {
            message.resourcePresetId = object.resourcePresetId;
        } else {
            message.resourcePresetId = '';
        }
        return message;
    },
};

const baseListResourcePresetsRequest: object = { pageSize: 0, pageToken: '' };

export const ListResourcePresetsRequest = {
    encode(
        message: ListResourcePresetsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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
    ): ListResourcePresetsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListResourcePresetsRequest,
        } as ListResourcePresetsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
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

    fromJSON(object: any): ListResourcePresetsRequest {
        const message = {
            ...baseListResourcePresetsRequest,
        } as ListResourcePresetsRequest;
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

    toJSON(message: ListResourcePresetsRequest): unknown {
        const obj: any = {};
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListResourcePresetsRequest>
    ): ListResourcePresetsRequest {
        const message = {
            ...baseListResourcePresetsRequest,
        } as ListResourcePresetsRequest;
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

const baseListResourcePresetsResponse: object = { nextPageToken: '' };

export const ListResourcePresetsResponse = {
    encode(
        message: ListResourcePresetsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.resourcePresets) {
            ResourcePreset.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListResourcePresetsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListResourcePresetsResponse,
        } as ListResourcePresetsResponse;
        message.resourcePresets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourcePresets.push(
                        ResourcePreset.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListResourcePresetsResponse {
        const message = {
            ...baseListResourcePresetsResponse,
        } as ListResourcePresetsResponse;
        message.resourcePresets = [];
        if (
            object.resourcePresets !== undefined &&
            object.resourcePresets !== null
        ) {
            for (const e of object.resourcePresets) {
                message.resourcePresets.push(ResourcePreset.fromJSON(e));
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

    toJSON(message: ListResourcePresetsResponse): unknown {
        const obj: any = {};
        if (message.resourcePresets) {
            obj.resourcePresets = message.resourcePresets.map((e) =>
                e ? ResourcePreset.toJSON(e) : undefined
            );
        } else {
            obj.resourcePresets = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListResourcePresetsResponse>
    ): ListResourcePresetsResponse {
        const message = {
            ...baseListResourcePresetsResponse,
        } as ListResourcePresetsResponse;
        message.resourcePresets = [];
        if (
            object.resourcePresets !== undefined &&
            object.resourcePresets !== null
        ) {
            for (const e of object.resourcePresets) {
                message.resourcePresets.push(ResourcePreset.fromPartial(e));
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

/** A set of methods for managing resource presets. */
export const ResourcePresetServiceService = {
    /**
     * Returns the specified resource preset.
     *
     * To get the list of available resource presets, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.mdb.mysql.v1.ResourcePresetService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetResourcePresetRequest) =>
            Buffer.from(GetResourcePresetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetResourcePresetRequest.decode(value),
        responseSerialize: (value: ResourcePreset) =>
            Buffer.from(ResourcePreset.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ResourcePreset.decode(value),
    },
    /** Retrieves the list of available resource presets. */
    list: {
        path: '/yandex.cloud.mdb.mysql.v1.ResourcePresetService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListResourcePresetsRequest) =>
            Buffer.from(ListResourcePresetsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListResourcePresetsRequest.decode(value),
        responseSerialize: (value: ListResourcePresetsResponse) =>
            Buffer.from(ListResourcePresetsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListResourcePresetsResponse.decode(value),
    },
} as const;

export interface ResourcePresetServiceServer
    extends UntypedServiceImplementation {
    /**
     * Returns the specified resource preset.
     *
     * To get the list of available resource presets, make a [List] request.
     */
    get: handleUnaryCall<GetResourcePresetRequest, ResourcePreset>;
    /** Retrieves the list of available resource presets. */
    list: handleUnaryCall<
        ListResourcePresetsRequest,
        ListResourcePresetsResponse
    >;
}

export interface ResourcePresetServiceClient extends Client {
    /**
     * Returns the specified resource preset.
     *
     * To get the list of available resource presets, make a [List] request.
     */
    get(
        request: GetResourcePresetRequest,
        callback: (error: ServiceError | null, response: ResourcePreset) => void
    ): ClientUnaryCall;
    get(
        request: GetResourcePresetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ResourcePreset) => void
    ): ClientUnaryCall;
    get(
        request: GetResourcePresetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ResourcePreset) => void
    ): ClientUnaryCall;
    /** Retrieves the list of available resource presets. */
    list(
        request: ListResourcePresetsRequest,
        callback: (
            error: ServiceError | null,
            response: ListResourcePresetsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListResourcePresetsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListResourcePresetsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListResourcePresetsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListResourcePresetsResponse
        ) => void
    ): ClientUnaryCall;
}

export const ResourcePresetServiceClient = makeGenericClientConstructor(
    ResourcePresetServiceService,
    'yandex.cloud.mdb.mysql.v1.ResourcePresetService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): ResourcePresetServiceClient;
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
