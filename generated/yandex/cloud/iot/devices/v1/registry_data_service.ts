/* eslint-disable */
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

export const protobufPackage = 'yandex.cloud.iot.devices.v1';

export interface PublishRegistryDataRequest {
    /** ID of registry publishing message */
    registryId: string;
    /** Topic where message should be published */
    topic: string;
    /** Content of the message */
    data: Uint8Array;
}

export interface PublishRegistryDataResponse {}

const basePublishRegistryDataRequest: object = { registryId: '', topic: '' };

export const PublishRegistryDataRequest = {
    encode(
        message: PublishRegistryDataRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.registryId !== '') {
            writer.uint32(10).string(message.registryId);
        }
        if (message.topic !== '') {
            writer.uint32(18).string(message.topic);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PublishRegistryDataRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePublishRegistryDataRequest,
        } as PublishRegistryDataRequest;
        message.data = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registryId = reader.string();
                    break;
                case 2:
                    message.topic = reader.string();
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PublishRegistryDataRequest {
        const message = {
            ...basePublishRegistryDataRequest,
        } as PublishRegistryDataRequest;
        message.data = new Uint8Array();
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = String(object.registryId);
        } else {
            message.registryId = '';
        }
        if (object.topic !== undefined && object.topic !== null) {
            message.topic = String(object.topic);
        } else {
            message.topic = '';
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },

    toJSON(message: PublishRegistryDataRequest): unknown {
        const obj: any = {};
        message.registryId !== undefined &&
            (obj.registryId = message.registryId);
        message.topic !== undefined && (obj.topic = message.topic);
        message.data !== undefined &&
            (obj.data = base64FromBytes(
                message.data !== undefined ? message.data : new Uint8Array()
            ));
        return obj;
    },

    fromPartial(
        object: DeepPartial<PublishRegistryDataRequest>
    ): PublishRegistryDataRequest {
        const message = {
            ...basePublishRegistryDataRequest,
        } as PublishRegistryDataRequest;
        if (object.registryId !== undefined && object.registryId !== null) {
            message.registryId = object.registryId;
        } else {
            message.registryId = '';
        }
        if (object.topic !== undefined && object.topic !== null) {
            message.topic = object.topic;
        } else {
            message.topic = '';
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        } else {
            message.data = new Uint8Array();
        }
        return message;
    },
};

const basePublishRegistryDataResponse: object = {};

export const PublishRegistryDataResponse = {
    encode(
        _: PublishRegistryDataResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PublishRegistryDataResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePublishRegistryDataResponse,
        } as PublishRegistryDataResponse;
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

    fromJSON(_: any): PublishRegistryDataResponse {
        const message = {
            ...basePublishRegistryDataResponse,
        } as PublishRegistryDataResponse;
        return message;
    },

    toJSON(_: PublishRegistryDataResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(
        _: DeepPartial<PublishRegistryDataResponse>
    ): PublishRegistryDataResponse {
        const message = {
            ...basePublishRegistryDataResponse,
        } as PublishRegistryDataResponse;
        return message;
    },
};

/** A set of methods to work with IoT Core messages on behalf of registry */
export const RegistryDataServiceService = {
    /** Publishes message on behalf of specified registry */
    publish: {
        path: '/yandex.cloud.iot.devices.v1.RegistryDataService/Publish',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: PublishRegistryDataRequest) =>
            Buffer.from(PublishRegistryDataRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            PublishRegistryDataRequest.decode(value),
        responseSerialize: (value: PublishRegistryDataResponse) =>
            Buffer.from(PublishRegistryDataResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            PublishRegistryDataResponse.decode(value),
    },
} as const;

export interface RegistryDataServiceServer
    extends UntypedServiceImplementation {
    /** Publishes message on behalf of specified registry */
    publish: handleUnaryCall<
        PublishRegistryDataRequest,
        PublishRegistryDataResponse
    >;
}

export interface RegistryDataServiceClient extends Client {
    /** Publishes message on behalf of specified registry */
    publish(
        request: PublishRegistryDataRequest,
        callback: (
            error: ServiceError | null,
            response: PublishRegistryDataResponse
        ) => void
    ): ClientUnaryCall;
    publish(
        request: PublishRegistryDataRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: PublishRegistryDataResponse
        ) => void
    ): ClientUnaryCall;
    publish(
        request: PublishRegistryDataRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: PublishRegistryDataResponse
        ) => void
    ): ClientUnaryCall;
}

export const RegistryDataServiceClient = makeGenericClientConstructor(
    RegistryDataServiceService,
    'yandex.cloud.iot.devices.v1.RegistryDataService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): RegistryDataServiceClient;
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

const atob: (b64: string) => string =
    globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}

const btoa: (bin: string) => string =
    globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
    const bin: string[] = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(''));
}

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
