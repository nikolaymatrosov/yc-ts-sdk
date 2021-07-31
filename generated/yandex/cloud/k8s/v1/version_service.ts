/* eslint-disable */
import {
    ReleaseChannel,
    releaseChannelFromJSON,
    releaseChannelToJSON,
} from '../../../../yandex/cloud/k8s/v1/cluster';
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

export const protobufPackage = 'yandex.cloud.k8s.v1';

export interface ListVersionsRequest {}

export interface ListVersionsResponse {
    /** Versions available in the specified release channel. */
    availableVersions: AvailableVersions[];
}

export interface AvailableVersions {
    /** Release channel: `RAPID`, `REGULAR` or `STABLE`. For more details see [documentation](https://cloud.yandex.ru/docs/managed-kubernetes/concepts/release-channels-and-updates). */
    releaseChannel: ReleaseChannel;
    /** Version of Kubernetes components. */
    versions: string[];
}

const baseListVersionsRequest: object = {};

export const ListVersionsRequest = {
    encode(
        _: ListVersionsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): ListVersionsRequest {
        const message = { ...baseListVersionsRequest } as ListVersionsRequest;
        return message;
    },

    toJSON(_: ListVersionsRequest): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<ListVersionsRequest>): ListVersionsRequest {
        const message = { ...baseListVersionsRequest } as ListVersionsRequest;
        return message;
    },
};

const baseListVersionsResponse: object = {};

export const ListVersionsResponse = {
    encode(
        message: ListVersionsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.availableVersions) {
            AvailableVersions.encode(v!, writer.uint32(10).fork()).ldelim();
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
        message.availableVersions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.availableVersions.push(
                        AvailableVersions.decode(reader, reader.uint32())
                    );
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
        message.availableVersions = [];
        if (
            object.availableVersions !== undefined &&
            object.availableVersions !== null
        ) {
            for (const e of object.availableVersions) {
                message.availableVersions.push(AvailableVersions.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: ListVersionsResponse): unknown {
        const obj: any = {};
        if (message.availableVersions) {
            obj.availableVersions = message.availableVersions.map((e) =>
                e ? AvailableVersions.toJSON(e) : undefined
            );
        } else {
            obj.availableVersions = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListVersionsResponse>
    ): ListVersionsResponse {
        const message = { ...baseListVersionsResponse } as ListVersionsResponse;
        message.availableVersions = [];
        if (
            object.availableVersions !== undefined &&
            object.availableVersions !== null
        ) {
            for (const e of object.availableVersions) {
                message.availableVersions.push(
                    AvailableVersions.fromPartial(e)
                );
            }
        }
        return message;
    },
};

const baseAvailableVersions: object = { releaseChannel: 0, versions: '' };

export const AvailableVersions = {
    encode(
        message: AvailableVersions,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.releaseChannel !== 0) {
            writer.uint32(8).int32(message.releaseChannel);
        }
        for (const v of message.versions) {
            writer.uint32(18).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AvailableVersions {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAvailableVersions } as AvailableVersions;
        message.versions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.releaseChannel = reader.int32() as any;
                    break;
                case 2:
                    message.versions.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AvailableVersions {
        const message = { ...baseAvailableVersions } as AvailableVersions;
        message.versions = [];
        if (
            object.releaseChannel !== undefined &&
            object.releaseChannel !== null
        ) {
            message.releaseChannel = releaseChannelFromJSON(
                object.releaseChannel
            );
        } else {
            message.releaseChannel = 0;
        }
        if (object.versions !== undefined && object.versions !== null) {
            for (const e of object.versions) {
                message.versions.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: AvailableVersions): unknown {
        const obj: any = {};
        message.releaseChannel !== undefined &&
            (obj.releaseChannel = releaseChannelToJSON(message.releaseChannel));
        if (message.versions) {
            obj.versions = message.versions.map((e) => e);
        } else {
            obj.versions = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<AvailableVersions>): AvailableVersions {
        const message = { ...baseAvailableVersions } as AvailableVersions;
        message.versions = [];
        if (
            object.releaseChannel !== undefined &&
            object.releaseChannel !== null
        ) {
            message.releaseChannel = object.releaseChannel;
        } else {
            message.releaseChannel = 0;
        }
        if (object.versions !== undefined && object.versions !== null) {
            for (const e of object.versions) {
                message.versions.push(e);
            }
        }
        return message;
    },
};

/** A set of methods for managing Kubernetes versions. */
export const VersionServiceService = {
    /** Retrieves the list of versions in the specified release channel. */
    list: {
        path: '/yandex.cloud.k8s.v1.VersionService/List',
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

export interface VersionServiceServer extends UntypedServiceImplementation {
    /** Retrieves the list of versions in the specified release channel. */
    list: handleUnaryCall<ListVersionsRequest, ListVersionsResponse>;
}

export interface VersionServiceClient extends Client {
    /** Retrieves the list of versions in the specified release channel. */
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

export const VersionServiceClient = makeGenericClientConstructor(
    VersionServiceService,
    'yandex.cloud.k8s.v1.VersionService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): VersionServiceClient;
};

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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}