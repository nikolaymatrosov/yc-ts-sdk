/* eslint-disable */
import { Status } from '../../../../google/rpc/status';
import { messageTypeRegistry } from '../../../../typeRegistry';
import {
    Destination,
    IncomingLogEntry,
    LogEntryDefaults,
} from '../../../../yandex/cloud/logging/v1/log_entry';
import { LogEntryResource } from '../../../../yandex/cloud/logging/v1/log_resource';
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

export const protobufPackage = 'yandex.cloud.logging.v1';

export interface WriteRequest {
    $type: 'yandex.cloud.logging.v1.WriteRequest';
    /**
     * Log entries destination.
     *
     * See [Destination] for details.
     */
    destination: Destination | undefined;
    /** Common resource (type, ID) specification for log entries. */
    resource: LogEntryResource | undefined;
    /** List of log entries. */
    entries: IncomingLogEntry[];
    /**
     * Log entries defaults.
     *
     * See [LogEntryDefaults] for details.
     */
    defaults: LogEntryDefaults | undefined;
}

export interface WriteResponse {
    $type: 'yandex.cloud.logging.v1.WriteResponse';
    /**
     * Map<idx, status> of ingest failures.
     *
     * If entry with idx N is absent, it was ingested successfully.
     */
    errors: { [key: number]: Status };
}

export interface WriteResponse_ErrorsEntry {
    $type: 'yandex.cloud.logging.v1.WriteResponse.ErrorsEntry';
    key: number;
    value: Status | undefined;
}

const baseWriteRequest: object = {
    $type: 'yandex.cloud.logging.v1.WriteRequest',
};

export const WriteRequest = {
    $type: 'yandex.cloud.logging.v1.WriteRequest' as const,

    encode(
        message: WriteRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.destination !== undefined) {
            Destination.encode(
                message.destination,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.resource !== undefined) {
            LogEntryResource.encode(
                message.resource,
                writer.uint32(18).fork()
            ).ldelim();
        }
        for (const v of message.entries) {
            IncomingLogEntry.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        if (message.defaults !== undefined) {
            LogEntryDefaults.encode(
                message.defaults,
                writer.uint32(34).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WriteRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWriteRequest } as WriteRequest;
        message.entries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.destination = Destination.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 2:
                    message.resource = LogEntryResource.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.entries.push(
                        IncomingLogEntry.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.defaults = LogEntryDefaults.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WriteRequest {
        const message = { ...baseWriteRequest } as WriteRequest;
        message.entries = [];
        if (object.destination !== undefined && object.destination !== null) {
            message.destination = Destination.fromJSON(object.destination);
        } else {
            message.destination = undefined;
        }
        if (object.resource !== undefined && object.resource !== null) {
            message.resource = LogEntryResource.fromJSON(object.resource);
        } else {
            message.resource = undefined;
        }
        if (object.entries !== undefined && object.entries !== null) {
            for (const e of object.entries) {
                message.entries.push(IncomingLogEntry.fromJSON(e));
            }
        }
        if (object.defaults !== undefined && object.defaults !== null) {
            message.defaults = LogEntryDefaults.fromJSON(object.defaults);
        } else {
            message.defaults = undefined;
        }
        return message;
    },

    toJSON(message: WriteRequest): unknown {
        const obj: any = {};
        message.destination !== undefined &&
            (obj.destination = message.destination
                ? Destination.toJSON(message.destination)
                : undefined);
        message.resource !== undefined &&
            (obj.resource = message.resource
                ? LogEntryResource.toJSON(message.resource)
                : undefined);
        if (message.entries) {
            obj.entries = message.entries.map((e) =>
                e ? IncomingLogEntry.toJSON(e) : undefined
            );
        } else {
            obj.entries = [];
        }
        message.defaults !== undefined &&
            (obj.defaults = message.defaults
                ? LogEntryDefaults.toJSON(message.defaults)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<WriteRequest>): WriteRequest {
        const message = { ...baseWriteRequest } as WriteRequest;
        message.entries = [];
        if (object.destination !== undefined && object.destination !== null) {
            message.destination = Destination.fromPartial(object.destination);
        } else {
            message.destination = undefined;
        }
        if (object.resource !== undefined && object.resource !== null) {
            message.resource = LogEntryResource.fromPartial(object.resource);
        } else {
            message.resource = undefined;
        }
        if (object.entries !== undefined && object.entries !== null) {
            for (const e of object.entries) {
                message.entries.push(IncomingLogEntry.fromPartial(e));
            }
        }
        if (object.defaults !== undefined && object.defaults !== null) {
            message.defaults = LogEntryDefaults.fromPartial(object.defaults);
        } else {
            message.defaults = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(WriteRequest.$type, WriteRequest);

const baseWriteResponse: object = {
    $type: 'yandex.cloud.logging.v1.WriteResponse',
};

export const WriteResponse = {
    $type: 'yandex.cloud.logging.v1.WriteResponse' as const,

    encode(
        message: WriteResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        Object.entries(message.errors).forEach(([key, value]) => {
            WriteResponse_ErrorsEntry.encode(
                {
                    $type: 'yandex.cloud.logging.v1.WriteResponse.ErrorsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(10).fork()
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WriteResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWriteResponse } as WriteResponse;
        message.errors = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = WriteResponse_ErrorsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry1.value !== undefined) {
                        message.errors[entry1.key] = entry1.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WriteResponse {
        const message = { ...baseWriteResponse } as WriteResponse;
        message.errors = {};
        if (object.errors !== undefined && object.errors !== null) {
            Object.entries(object.errors).forEach(([key, value]) => {
                message.errors[Number(key)] = Status.fromJSON(value);
            });
        }
        return message;
    },

    toJSON(message: WriteResponse): unknown {
        const obj: any = {};
        obj.errors = {};
        if (message.errors) {
            Object.entries(message.errors).forEach(([k, v]) => {
                obj.errors[k] = Status.toJSON(v);
            });
        }
        return obj;
    },

    fromPartial(object: DeepPartial<WriteResponse>): WriteResponse {
        const message = { ...baseWriteResponse } as WriteResponse;
        message.errors = {};
        if (object.errors !== undefined && object.errors !== null) {
            Object.entries(object.errors).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.errors[Number(key)] = Status.fromPartial(value);
                }
            });
        }
        return message;
    },
};

messageTypeRegistry.set(WriteResponse.$type, WriteResponse);

const baseWriteResponse_ErrorsEntry: object = {
    $type: 'yandex.cloud.logging.v1.WriteResponse.ErrorsEntry',
    key: 0,
};

export const WriteResponse_ErrorsEntry = {
    $type: 'yandex.cloud.logging.v1.WriteResponse.ErrorsEntry' as const,

    encode(
        message: WriteResponse_ErrorsEntry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== 0) {
            writer.uint32(8).int64(message.key);
        }
        if (message.value !== undefined) {
            Status.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): WriteResponse_ErrorsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseWriteResponse_ErrorsEntry,
        } as WriteResponse_ErrorsEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.value = Status.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WriteResponse_ErrorsEntry {
        const message = {
            ...baseWriteResponse_ErrorsEntry,
        } as WriteResponse_ErrorsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = Number(object.key);
        } else {
            message.key = 0;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = Status.fromJSON(object.value);
        } else {
            message.value = undefined;
        }
        return message;
    },

    toJSON(message: WriteResponse_ErrorsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value
                ? Status.toJSON(message.value)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<WriteResponse_ErrorsEntry>
    ): WriteResponse_ErrorsEntry {
        const message = {
            ...baseWriteResponse_ErrorsEntry,
        } as WriteResponse_ErrorsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = 0;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = Status.fromPartial(object.value);
        } else {
            message.value = undefined;
        }
        return message;
    },
};

messageTypeRegistry.set(
    WriteResponse_ErrorsEntry.$type,
    WriteResponse_ErrorsEntry
);

/** A set of methods for writing to log groups. To make a request use `ingester.logging.yandexcloud.net`. */
export const LogIngestionServiceService = {
    /** Write log entries to specified destination. */
    write: {
        path: '/yandex.cloud.logging.v1.LogIngestionService/Write',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: WriteRequest) =>
            Buffer.from(WriteRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => WriteRequest.decode(value),
        responseSerialize: (value: WriteResponse) =>
            Buffer.from(WriteResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) => WriteResponse.decode(value),
    },
} as const;

export interface LogIngestionServiceServer
    extends UntypedServiceImplementation {
    /** Write log entries to specified destination. */
    write: handleUnaryCall<WriteRequest, WriteResponse>;
}

export interface LogIngestionServiceClient extends Client {
    /** Write log entries to specified destination. */
    write(
        request: WriteRequest,
        callback: (error: ServiceError | null, response: WriteResponse) => void
    ): ClientUnaryCall;
    write(
        request: WriteRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: WriteResponse) => void
    ): ClientUnaryCall;
    write(
        request: WriteRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: WriteResponse) => void
    ): ClientUnaryCall;
}

export const LogIngestionServiceClient = makeGenericClientConstructor(
    LogIngestionServiceService,
    'yandex.cloud.logging.v1.LogIngestionService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): LogIngestionServiceClient;
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
