/* eslint-disable */
import {
    UsageRecord,
    AcceptedUsageRecord,
    RejectedUsageRecord,
} from '../../../../../yandex/cloud/marketplace/v1/metering/usage_record';
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

export const protobufPackage = 'yandex.cloud.marketplace.v1.metering';

export interface WriteImageProductUsageRequest {
    /** Checks whether you have the access required for the emit usage */
    validateOnly: boolean;
    /** Marketplace Product's ID */
    productId: string;
    /** List of product usage records (up to 25 pet request) */
    usageRecords: UsageRecord[];
}

export interface WriteImageProductUsageResponse {
    /** List of accepted product usage records */
    accepted: AcceptedUsageRecord[];
    /** List of rejected product usage records (with reason) */
    rejected: RejectedUsageRecord[];
}

const baseWriteImageProductUsageRequest: object = {
    validateOnly: false,
    productId: '',
};

export const WriteImageProductUsageRequest = {
    encode(
        message: WriteImageProductUsageRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.validateOnly === true) {
            writer.uint32(8).bool(message.validateOnly);
        }
        if (message.productId !== '') {
            writer.uint32(18).string(message.productId);
        }
        for (const v of message.usageRecords) {
            UsageRecord.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): WriteImageProductUsageRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseWriteImageProductUsageRequest,
        } as WriteImageProductUsageRequest;
        message.usageRecords = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validateOnly = reader.bool();
                    break;
                case 2:
                    message.productId = reader.string();
                    break;
                case 3:
                    message.usageRecords.push(
                        UsageRecord.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WriteImageProductUsageRequest {
        const message = {
            ...baseWriteImageProductUsageRequest,
        } as WriteImageProductUsageRequest;
        message.usageRecords = [];
        if (object.validateOnly !== undefined && object.validateOnly !== null) {
            message.validateOnly = Boolean(object.validateOnly);
        } else {
            message.validateOnly = false;
        }
        if (object.productId !== undefined && object.productId !== null) {
            message.productId = String(object.productId);
        } else {
            message.productId = '';
        }
        if (object.usageRecords !== undefined && object.usageRecords !== null) {
            for (const e of object.usageRecords) {
                message.usageRecords.push(UsageRecord.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: WriteImageProductUsageRequest): unknown {
        const obj: any = {};
        message.validateOnly !== undefined &&
            (obj.validateOnly = message.validateOnly);
        message.productId !== undefined && (obj.productId = message.productId);
        if (message.usageRecords) {
            obj.usageRecords = message.usageRecords.map((e) =>
                e ? UsageRecord.toJSON(e) : undefined
            );
        } else {
            obj.usageRecords = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<WriteImageProductUsageRequest>
    ): WriteImageProductUsageRequest {
        const message = {
            ...baseWriteImageProductUsageRequest,
        } as WriteImageProductUsageRequest;
        message.usageRecords = [];
        if (object.validateOnly !== undefined && object.validateOnly !== null) {
            message.validateOnly = object.validateOnly;
        } else {
            message.validateOnly = false;
        }
        if (object.productId !== undefined && object.productId !== null) {
            message.productId = object.productId;
        } else {
            message.productId = '';
        }
        if (object.usageRecords !== undefined && object.usageRecords !== null) {
            for (const e of object.usageRecords) {
                message.usageRecords.push(UsageRecord.fromPartial(e));
            }
        }
        return message;
    },
};

const baseWriteImageProductUsageResponse: object = {};

export const WriteImageProductUsageResponse = {
    encode(
        message: WriteImageProductUsageResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.accepted) {
            AcceptedUsageRecord.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.rejected) {
            RejectedUsageRecord.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): WriteImageProductUsageResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseWriteImageProductUsageResponse,
        } as WriteImageProductUsageResponse;
        message.accepted = [];
        message.rejected = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accepted.push(
                        AcceptedUsageRecord.decode(reader, reader.uint32())
                    );
                    break;
                case 2:
                    message.rejected.push(
                        RejectedUsageRecord.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WriteImageProductUsageResponse {
        const message = {
            ...baseWriteImageProductUsageResponse,
        } as WriteImageProductUsageResponse;
        message.accepted = [];
        message.rejected = [];
        if (object.accepted !== undefined && object.accepted !== null) {
            for (const e of object.accepted) {
                message.accepted.push(AcceptedUsageRecord.fromJSON(e));
            }
        }
        if (object.rejected !== undefined && object.rejected !== null) {
            for (const e of object.rejected) {
                message.rejected.push(RejectedUsageRecord.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: WriteImageProductUsageResponse): unknown {
        const obj: any = {};
        if (message.accepted) {
            obj.accepted = message.accepted.map((e) =>
                e ? AcceptedUsageRecord.toJSON(e) : undefined
            );
        } else {
            obj.accepted = [];
        }
        if (message.rejected) {
            obj.rejected = message.rejected.map((e) =>
                e ? RejectedUsageRecord.toJSON(e) : undefined
            );
        } else {
            obj.rejected = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<WriteImageProductUsageResponse>
    ): WriteImageProductUsageResponse {
        const message = {
            ...baseWriteImageProductUsageResponse,
        } as WriteImageProductUsageResponse;
        message.accepted = [];
        message.rejected = [];
        if (object.accepted !== undefined && object.accepted !== null) {
            for (const e of object.accepted) {
                message.accepted.push(AcceptedUsageRecord.fromPartial(e));
            }
        }
        if (object.rejected !== undefined && object.rejected !== null) {
            for (const e of object.rejected) {
                message.rejected.push(RejectedUsageRecord.fromPartial(e));
            }
        }
        return message;
    },
};

export const ImageProductUsageServiceService = {
    /** Writes image product's usage (authenticated by user's service account) */
    write: {
        path: '/yandex.cloud.marketplace.v1.metering.ImageProductUsageService/Write',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: WriteImageProductUsageRequest) =>
            Buffer.from(WriteImageProductUsageRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            WriteImageProductUsageRequest.decode(value),
        responseSerialize: (value: WriteImageProductUsageResponse) =>
            Buffer.from(WriteImageProductUsageResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            WriteImageProductUsageResponse.decode(value),
    },
} as const;

export interface ImageProductUsageServiceServer
    extends UntypedServiceImplementation {
    /** Writes image product's usage (authenticated by user's service account) */
    write: handleUnaryCall<
        WriteImageProductUsageRequest,
        WriteImageProductUsageResponse
    >;
}

export interface ImageProductUsageServiceClient extends Client {
    /** Writes image product's usage (authenticated by user's service account) */
    write(
        request: WriteImageProductUsageRequest,
        callback: (
            error: ServiceError | null,
            response: WriteImageProductUsageResponse
        ) => void
    ): ClientUnaryCall;
    write(
        request: WriteImageProductUsageRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: WriteImageProductUsageResponse
        ) => void
    ): ClientUnaryCall;
    write(
        request: WriteImageProductUsageRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: WriteImageProductUsageResponse
        ) => void
    ): ClientUnaryCall;
}

export const ImageProductUsageServiceClient = makeGenericClientConstructor(
    ImageProductUsageServiceService,
    'yandex.cloud.marketplace.v1.metering.ImageProductUsageService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): ImageProductUsageServiceClient;
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
