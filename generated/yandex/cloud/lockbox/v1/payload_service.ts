/* eslint-disable */
import { Payload } from '../../../../yandex/cloud/lockbox/v1/payload';
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

export const protobufPackage = 'yandex.cloud.lockbox.v1';

export interface GetPayloadRequest {
    /** ID of the secret. */
    secretId: string;
    /** Optional ID of the version. */
    versionId: string;
}

const baseGetPayloadRequest: object = { secretId: '', versionId: '' };

export const GetPayloadRequest = {
    encode(
        message: GetPayloadRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetPayloadRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetPayloadRequest } as GetPayloadRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetPayloadRequest {
        const message = { ...baseGetPayloadRequest } as GetPayloadRequest;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        } else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        } else {
            message.versionId = '';
        }
        return message;
    },

    toJSON(message: GetPayloadRequest): unknown {
        const obj: any = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },

    fromPartial(object: DeepPartial<GetPayloadRequest>): GetPayloadRequest {
        const message = { ...baseGetPayloadRequest } as GetPayloadRequest;
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        } else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        } else {
            message.versionId = '';
        }
        return message;
    },
};

/** Set of methods to access payload of secrets. */
export const PayloadServiceService = {
    /**
     * Returns the payload of the specified secret.
     *
     * To get the list of all available secrets, make a [SecretService.List] request.
     */
    get: {
        path: '/yandex.cloud.lockbox.v1.PayloadService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetPayloadRequest) =>
            Buffer.from(GetPayloadRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetPayloadRequest.decode(value),
        responseSerialize: (value: Payload) =>
            Buffer.from(Payload.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Payload.decode(value),
    },
} as const;

export interface PayloadServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the payload of the specified secret.
     *
     * To get the list of all available secrets, make a [SecretService.List] request.
     */
    get: handleUnaryCall<GetPayloadRequest, Payload>;
}

export interface PayloadServiceClient extends Client {
    /**
     * Returns the payload of the specified secret.
     *
     * To get the list of all available secrets, make a [SecretService.List] request.
     */
    get(
        request: GetPayloadRequest,
        callback: (error: ServiceError | null, response: Payload) => void
    ): ClientUnaryCall;
    get(
        request: GetPayloadRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Payload) => void
    ): ClientUnaryCall;
    get(
        request: GetPayloadRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Payload) => void
    ): ClientUnaryCall;
}

export const PayloadServiceClient = makeGenericClientConstructor(
    PayloadServiceService,
    'yandex.cloud.lockbox.v1.PayloadService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): PayloadServiceClient;
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
