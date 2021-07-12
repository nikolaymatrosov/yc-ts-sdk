/* eslint-disable */
import { Struct } from '../../../../google/protobuf/struct';
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

export const protobufPackage = 'yandex.cloud.datasphere.v1';

export interface NodeExecutionRequest {
    /** ID of the folder that will be matched with Node ACL. */
    folderId: string;
    /** ID of the Node to perform request on. */
    nodeId: string;
    /** Input data for the execution. */
    input: Struct | undefined;
}

export interface NodeExecutionResponse {
    /** Result of the execution. */
    output: Struct | undefined;
}

const baseNodeExecutionRequest: object = { folderId: '', nodeId: '' };

export const NodeExecutionRequest = {
    encode(
        message: NodeExecutionRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.nodeId !== '') {
            writer.uint32(18).string(message.nodeId);
        }
        if (message.input !== undefined) {
            Struct.encode(message.input, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): NodeExecutionRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNodeExecutionRequest } as NodeExecutionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.nodeId = reader.string();
                    break;
                case 3:
                    message.input = Struct.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): NodeExecutionRequest {
        const message = { ...baseNodeExecutionRequest } as NodeExecutionRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        if (object.nodeId !== undefined && object.nodeId !== null) {
            message.nodeId = String(object.nodeId);
        } else {
            message.nodeId = '';
        }
        if (object.input !== undefined && object.input !== null) {
            message.input = Struct.fromJSON(object.input);
        } else {
            message.input = undefined;
        }
        return message;
    },

    toJSON(message: NodeExecutionRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        message.input !== undefined &&
            (obj.input = message.input
                ? Struct.toJSON(message.input)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<NodeExecutionRequest>
    ): NodeExecutionRequest {
        const message = { ...baseNodeExecutionRequest } as NodeExecutionRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        if (object.nodeId !== undefined && object.nodeId !== null) {
            message.nodeId = object.nodeId;
        } else {
            message.nodeId = '';
        }
        if (object.input !== undefined && object.input !== null) {
            message.input = Struct.fromPartial(object.input);
        } else {
            message.input = undefined;
        }
        return message;
    },
};

const baseNodeExecutionResponse: object = {};

export const NodeExecutionResponse = {
    encode(
        message: NodeExecutionResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.output !== undefined) {
            Struct.encode(message.output, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): NodeExecutionResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseNodeExecutionResponse,
        } as NodeExecutionResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.output = Struct.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): NodeExecutionResponse {
        const message = {
            ...baseNodeExecutionResponse,
        } as NodeExecutionResponse;
        if (object.output !== undefined && object.output !== null) {
            message.output = Struct.fromJSON(object.output);
        } else {
            message.output = undefined;
        }
        return message;
    },

    toJSON(message: NodeExecutionResponse): unknown {
        const obj: any = {};
        message.output !== undefined &&
            (obj.output = message.output
                ? Struct.toJSON(message.output)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<NodeExecutionResponse>
    ): NodeExecutionResponse {
        const message = {
            ...baseNodeExecutionResponse,
        } as NodeExecutionResponse;
        if (object.output !== undefined && object.output !== null) {
            message.output = Struct.fromPartial(object.output);
        } else {
            message.output = undefined;
        }
        return message;
    },
};

/** A set of methods for managing Node resources. */
export const NodeServiceService = {
    /** Executes deployed Node. */
    execute: {
        path: '/yandex.cloud.datasphere.v1.NodeService/Execute',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: NodeExecutionRequest) =>
            Buffer.from(NodeExecutionRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            NodeExecutionRequest.decode(value),
        responseSerialize: (value: NodeExecutionResponse) =>
            Buffer.from(NodeExecutionResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            NodeExecutionResponse.decode(value),
    },
} as const;

export interface NodeServiceServer extends UntypedServiceImplementation {
    /** Executes deployed Node. */
    execute: handleUnaryCall<NodeExecutionRequest, NodeExecutionResponse>;
}

export interface NodeServiceClient extends Client {
    /** Executes deployed Node. */
    execute(
        request: NodeExecutionRequest,
        callback: (
            error: ServiceError | null,
            response: NodeExecutionResponse
        ) => void
    ): ClientUnaryCall;
    execute(
        request: NodeExecutionRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: NodeExecutionResponse
        ) => void
    ): ClientUnaryCall;
    execute(
        request: NodeExecutionRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: NodeExecutionResponse
        ) => void
    ): ClientUnaryCall;
}

export const NodeServiceClient = makeGenericClientConstructor(
    NodeServiceService,
    'yandex.cloud.datasphere.v1.NodeService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): NodeServiceClient;
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
