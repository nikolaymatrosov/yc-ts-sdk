/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
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

export const protobufPackage = 'yandex.cloud.certificatemanager.v1';

export interface GetCertificateContentResponse {
    $type: 'yandex.cloud.certificatemanager.v1.GetCertificateContentResponse';
    /** ID of the certificate. */
    certificateId: string;
    /** PEM-encoded certificate chain content of the certificate. */
    certificateChain: string[];
    /** PEM-encoded private key content of the certificate. */
    privateKey: string;
}

export interface GetCertificateContentRequest {
    $type: 'yandex.cloud.certificatemanager.v1.GetCertificateContentRequest';
    /** ID of the certificate to download content. */
    certificateId: string;
}

const baseGetCertificateContentResponse: object = {
    $type: 'yandex.cloud.certificatemanager.v1.GetCertificateContentResponse',
    certificateId: '',
    certificateChain: '',
    privateKey: '',
};

export const GetCertificateContentResponse = {
    $type: 'yandex.cloud.certificatemanager.v1.GetCertificateContentResponse' as const,

    encode(
        message: GetCertificateContentResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        for (const v of message.certificateChain) {
            writer.uint32(26).string(v!);
        }
        if (message.privateKey !== '') {
            writer.uint32(34).string(message.privateKey);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetCertificateContentResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetCertificateContentResponse,
        } as GetCertificateContentResponse;
        message.certificateChain = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
                    break;
                case 3:
                    message.certificateChain.push(reader.string());
                    break;
                case 4:
                    message.privateKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetCertificateContentResponse {
        const message = {
            ...baseGetCertificateContentResponse,
        } as GetCertificateContentResponse;
        message.certificateChain = [];
        if (
            object.certificateId !== undefined &&
            object.certificateId !== null
        ) {
            message.certificateId = String(object.certificateId);
        } else {
            message.certificateId = '';
        }
        if (
            object.certificateChain !== undefined &&
            object.certificateChain !== null
        ) {
            for (const e of object.certificateChain) {
                message.certificateChain.push(String(e));
            }
        }
        if (object.privateKey !== undefined && object.privateKey !== null) {
            message.privateKey = String(object.privateKey);
        } else {
            message.privateKey = '';
        }
        return message;
    },

    toJSON(message: GetCertificateContentResponse): unknown {
        const obj: any = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        if (message.certificateChain) {
            obj.certificateChain = message.certificateChain.map((e) => e);
        } else {
            obj.certificateChain = [];
        }
        message.privateKey !== undefined &&
            (obj.privateKey = message.privateKey);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetCertificateContentResponse>
    ): GetCertificateContentResponse {
        const message = {
            ...baseGetCertificateContentResponse,
        } as GetCertificateContentResponse;
        message.certificateChain = [];
        if (
            object.certificateId !== undefined &&
            object.certificateId !== null
        ) {
            message.certificateId = object.certificateId;
        } else {
            message.certificateId = '';
        }
        if (
            object.certificateChain !== undefined &&
            object.certificateChain !== null
        ) {
            for (const e of object.certificateChain) {
                message.certificateChain.push(e);
            }
        }
        if (object.privateKey !== undefined && object.privateKey !== null) {
            message.privateKey = object.privateKey;
        } else {
            message.privateKey = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    GetCertificateContentResponse.$type,
    GetCertificateContentResponse
);

const baseGetCertificateContentRequest: object = {
    $type: 'yandex.cloud.certificatemanager.v1.GetCertificateContentRequest',
    certificateId: '',
};

export const GetCertificateContentRequest = {
    $type: 'yandex.cloud.certificatemanager.v1.GetCertificateContentRequest' as const,

    encode(
        message: GetCertificateContentRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetCertificateContentRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetCertificateContentRequest,
        } as GetCertificateContentRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetCertificateContentRequest {
        const message = {
            ...baseGetCertificateContentRequest,
        } as GetCertificateContentRequest;
        if (
            object.certificateId !== undefined &&
            object.certificateId !== null
        ) {
            message.certificateId = String(object.certificateId);
        } else {
            message.certificateId = '';
        }
        return message;
    },

    toJSON(message: GetCertificateContentRequest): unknown {
        const obj: any = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetCertificateContentRequest>
    ): GetCertificateContentRequest {
        const message = {
            ...baseGetCertificateContentRequest,
        } as GetCertificateContentRequest;
        if (
            object.certificateId !== undefined &&
            object.certificateId !== null
        ) {
            message.certificateId = object.certificateId;
        } else {
            message.certificateId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    GetCertificateContentRequest.$type,
    GetCertificateContentRequest
);

/** A set of methods for managing certificate content. */
export const CertificateContentServiceService = {
    /** Returns chain and private key of the specified certificate. */
    get: {
        path: '/yandex.cloud.certificatemanager.v1.CertificateContentService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetCertificateContentRequest) =>
            Buffer.from(GetCertificateContentRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetCertificateContentRequest.decode(value),
        responseSerialize: (value: GetCertificateContentResponse) =>
            Buffer.from(GetCertificateContentResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            GetCertificateContentResponse.decode(value),
    },
} as const;

export interface CertificateContentServiceServer
    extends UntypedServiceImplementation {
    /** Returns chain and private key of the specified certificate. */
    get: handleUnaryCall<
        GetCertificateContentRequest,
        GetCertificateContentResponse
    >;
}

export interface CertificateContentServiceClient extends Client {
    /** Returns chain and private key of the specified certificate. */
    get(
        request: GetCertificateContentRequest,
        callback: (
            error: ServiceError | null,
            response: GetCertificateContentResponse
        ) => void
    ): ClientUnaryCall;
    get(
        request: GetCertificateContentRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: GetCertificateContentResponse
        ) => void
    ): ClientUnaryCall;
    get(
        request: GetCertificateContentRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: GetCertificateContentResponse
        ) => void
    ): ClientUnaryCall;
}

export const CertificateContentServiceClient = makeGenericClientConstructor(
    CertificateContentServiceService,
    'yandex.cloud.certificatemanager.v1.CertificateContentService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): CertificateContentServiceClient;
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
    ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
    : Partial<T>;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
