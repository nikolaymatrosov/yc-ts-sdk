/* eslint-disable */
import { Operation } from '../../../../yandex/cloud/operation/operation';
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

export const protobufPackage = 'yandex.cloud.cdn.v1';

export interface ActivateProviderRequest {
    /** ID of the folder that the activate provider belongs to. */
    folderId: string;
    /**
     * Specify provider brand/type.
     *
     * Possible values: `gcore`.
     */
    providerType: string;
}

export interface ActivateProviderMetadata {
    /** ID of the folder that the activate provider belongs to. */
    folderId: string;
}

export interface ListActivatedProvidersRequest {
    /** ID of the folder that the activate provider belongs to. */
    folderId: string;
}

export interface ListActivatedProvidersResponse {
    /** Creates a list of providers. */
    providers: string[];
}

const baseActivateProviderRequest: object = { folderId: '', providerType: '' };

export const ActivateProviderRequest = {
    encode(
        message: ActivateProviderRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.providerType !== '') {
            writer.uint32(18).string(message.providerType);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ActivateProviderRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseActivateProviderRequest,
        } as ActivateProviderRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.providerType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ActivateProviderRequest {
        const message = {
            ...baseActivateProviderRequest,
        } as ActivateProviderRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        if (object.providerType !== undefined && object.providerType !== null) {
            message.providerType = String(object.providerType);
        } else {
            message.providerType = '';
        }
        return message;
    },

    toJSON(message: ActivateProviderRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.providerType !== undefined &&
            (obj.providerType = message.providerType);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ActivateProviderRequest>
    ): ActivateProviderRequest {
        const message = {
            ...baseActivateProviderRequest,
        } as ActivateProviderRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        if (object.providerType !== undefined && object.providerType !== null) {
            message.providerType = object.providerType;
        } else {
            message.providerType = '';
        }
        return message;
    },
};

const baseActivateProviderMetadata: object = { folderId: '' };

export const ActivateProviderMetadata = {
    encode(
        message: ActivateProviderMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ActivateProviderMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseActivateProviderMetadata,
        } as ActivateProviderMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ActivateProviderMetadata {
        const message = {
            ...baseActivateProviderMetadata,
        } as ActivateProviderMetadata;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        return message;
    },

    toJSON(message: ActivateProviderMetadata): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ActivateProviderMetadata>
    ): ActivateProviderMetadata {
        const message = {
            ...baseActivateProviderMetadata,
        } as ActivateProviderMetadata;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        return message;
    },
};

const baseListActivatedProvidersRequest: object = { folderId: '' };

export const ListActivatedProvidersRequest = {
    encode(
        message: ListActivatedProvidersRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListActivatedProvidersRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListActivatedProvidersRequest,
        } as ListActivatedProvidersRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListActivatedProvidersRequest {
        const message = {
            ...baseListActivatedProvidersRequest,
        } as ListActivatedProvidersRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        return message;
    },

    toJSON(message: ListActivatedProvidersRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListActivatedProvidersRequest>
    ): ListActivatedProvidersRequest {
        const message = {
            ...baseListActivatedProvidersRequest,
        } as ListActivatedProvidersRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        return message;
    },
};

const baseListActivatedProvidersResponse: object = { providers: '' };

export const ListActivatedProvidersResponse = {
    encode(
        message: ListActivatedProvidersResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.providers) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListActivatedProvidersResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListActivatedProvidersResponse,
        } as ListActivatedProvidersResponse;
        message.providers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.providers.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListActivatedProvidersResponse {
        const message = {
            ...baseListActivatedProvidersResponse,
        } as ListActivatedProvidersResponse;
        message.providers = [];
        if (object.providers !== undefined && object.providers !== null) {
            for (const e of object.providers) {
                message.providers.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: ListActivatedProvidersResponse): unknown {
        const obj: any = {};
        if (message.providers) {
            obj.providers = message.providers.map((e) => e);
        } else {
            obj.providers = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListActivatedProvidersResponse>
    ): ListActivatedProvidersResponse {
        const message = {
            ...baseListActivatedProvidersResponse,
        } as ListActivatedProvidersResponse;
        message.providers = [];
        if (object.providers !== undefined && object.providers !== null) {
            for (const e of object.providers) {
                message.providers.push(e);
            }
        }
        return message;
    },
};

/** A set of methods for managing Provider Service resources. */
export const ProviderServiceService = {
    /** Activate provider for specified client. */
    activate: {
        path: '/yandex.cloud.cdn.v1.ProviderService/Activate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ActivateProviderRequest) =>
            Buffer.from(ActivateProviderRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ActivateProviderRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** List activated providers for specified client. */
    listActivated: {
        path: '/yandex.cloud.cdn.v1.ProviderService/ListActivated',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListActivatedProvidersRequest) =>
            Buffer.from(ListActivatedProvidersRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListActivatedProvidersRequest.decode(value),
        responseSerialize: (value: ListActivatedProvidersResponse) =>
            Buffer.from(ListActivatedProvidersResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListActivatedProvidersResponse.decode(value),
    },
} as const;

export interface ProviderServiceServer extends UntypedServiceImplementation {
    /** Activate provider for specified client. */
    activate: handleUnaryCall<ActivateProviderRequest, Operation>;
    /** List activated providers for specified client. */
    listActivated: handleUnaryCall<
        ListActivatedProvidersRequest,
        ListActivatedProvidersResponse
    >;
}

export interface ProviderServiceClient extends Client {
    /** Activate provider for specified client. */
    activate(
        request: ActivateProviderRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    activate(
        request: ActivateProviderRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    activate(
        request: ActivateProviderRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** List activated providers for specified client. */
    listActivated(
        request: ListActivatedProvidersRequest,
        callback: (
            error: ServiceError | null,
            response: ListActivatedProvidersResponse
        ) => void
    ): ClientUnaryCall;
    listActivated(
        request: ListActivatedProvidersRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListActivatedProvidersResponse
        ) => void
    ): ClientUnaryCall;
    listActivated(
        request: ListActivatedProvidersRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListActivatedProvidersResponse
        ) => void
    ): ClientUnaryCall;
}

export const ProviderServiceClient = makeGenericClientConstructor(
    ProviderServiceService,
    'yandex.cloud.cdn.v1.ProviderService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): ProviderServiceClient;
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
