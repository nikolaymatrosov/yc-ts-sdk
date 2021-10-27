/* eslint-disable */
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import {
    FormatSchemaType,
    FormatSchema,
    formatSchemaTypeFromJSON,
    formatSchemaTypeToJSON,
} from '../../../../../yandex/cloud/mdb/clickhouse/v1/format_schema';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
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

export const protobufPackage = 'yandex.cloud.mdb.clickhouse.v1';

export interface GetFormatSchemaRequest {
    clusterId: string;
    formatSchemaName: string;
}

export interface ListFormatSchemasRequest {
    clusterId: string;
    pageSize: number;
    pageToken: string;
}

export interface ListFormatSchemasResponse {
    formatSchemas: FormatSchema[];
    nextPageToken: string;
}

export interface CreateFormatSchemaRequest {
    clusterId: string;
    formatSchemaName: string;
    type: FormatSchemaType;
    uri: string;
}

export interface CreateFormatSchemaMetadata {
    clusterId: string;
    formatSchemaName: string;
}

export interface UpdateFormatSchemaRequest {
    clusterId: string;
    formatSchemaName: string;
    updateMask: FieldMask | undefined;
    uri: string;
}

export interface UpdateFormatSchemaMetadata {
    clusterId: string;
    formatSchemaName: string;
}

export interface DeleteFormatSchemaRequest {
    clusterId: string;
    formatSchemaName: string;
}

export interface DeleteFormatSchemaMetadata {
    clusterId: string;
    formatSchemaName: string;
}

const baseGetFormatSchemaRequest: object = {
    clusterId: '',
    formatSchemaName: '',
};

export const GetFormatSchemaRequest = {
    encode(
        message: GetFormatSchemaRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.formatSchemaName !== '') {
            writer.uint32(18).string(message.formatSchemaName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetFormatSchemaRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetFormatSchemaRequest,
        } as GetFormatSchemaRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.formatSchemaName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetFormatSchemaRequest {
        const message = {
            ...baseGetFormatSchemaRequest,
        } as GetFormatSchemaRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (
            object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null
        ) {
            message.formatSchemaName = String(object.formatSchemaName);
        } else {
            message.formatSchemaName = '';
        }
        return message;
    },

    toJSON(message: GetFormatSchemaRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.formatSchemaName !== undefined &&
            (obj.formatSchemaName = message.formatSchemaName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetFormatSchemaRequest>
    ): GetFormatSchemaRequest {
        const message = {
            ...baseGetFormatSchemaRequest,
        } as GetFormatSchemaRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (
            object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null
        ) {
            message.formatSchemaName = object.formatSchemaName;
        } else {
            message.formatSchemaName = '';
        }
        return message;
    },
};

const baseListFormatSchemasRequest: object = {
    clusterId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListFormatSchemasRequest = {
    encode(
        message: ListFormatSchemasRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
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
    ): ListFormatSchemasRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListFormatSchemasRequest,
        } as ListFormatSchemasRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
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

    fromJSON(object: any): ListFormatSchemasRequest {
        const message = {
            ...baseListFormatSchemasRequest,
        } as ListFormatSchemasRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
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

    toJSON(message: ListFormatSchemasRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListFormatSchemasRequest>
    ): ListFormatSchemasRequest {
        const message = {
            ...baseListFormatSchemasRequest,
        } as ListFormatSchemasRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
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

const baseListFormatSchemasResponse: object = { nextPageToken: '' };

export const ListFormatSchemasResponse = {
    encode(
        message: ListFormatSchemasResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.formatSchemas) {
            FormatSchema.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListFormatSchemasResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListFormatSchemasResponse,
        } as ListFormatSchemasResponse;
        message.formatSchemas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.formatSchemas.push(
                        FormatSchema.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListFormatSchemasResponse {
        const message = {
            ...baseListFormatSchemasResponse,
        } as ListFormatSchemasResponse;
        message.formatSchemas = [];
        if (
            object.formatSchemas !== undefined &&
            object.formatSchemas !== null
        ) {
            for (const e of object.formatSchemas) {
                message.formatSchemas.push(FormatSchema.fromJSON(e));
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

    toJSON(message: ListFormatSchemasResponse): unknown {
        const obj: any = {};
        if (message.formatSchemas) {
            obj.formatSchemas = message.formatSchemas.map((e) =>
                e ? FormatSchema.toJSON(e) : undefined
            );
        } else {
            obj.formatSchemas = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListFormatSchemasResponse>
    ): ListFormatSchemasResponse {
        const message = {
            ...baseListFormatSchemasResponse,
        } as ListFormatSchemasResponse;
        message.formatSchemas = [];
        if (
            object.formatSchemas !== undefined &&
            object.formatSchemas !== null
        ) {
            for (const e of object.formatSchemas) {
                message.formatSchemas.push(FormatSchema.fromPartial(e));
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

const baseCreateFormatSchemaRequest: object = {
    clusterId: '',
    formatSchemaName: '',
    type: 0,
    uri: '',
};

export const CreateFormatSchemaRequest = {
    encode(
        message: CreateFormatSchemaRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.formatSchemaName !== '') {
            writer.uint32(18).string(message.formatSchemaName);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.uri !== '') {
            writer.uint32(34).string(message.uri);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateFormatSchemaRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateFormatSchemaRequest,
        } as CreateFormatSchemaRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.formatSchemaName = reader.string();
                    break;
                case 3:
                    message.type = reader.int32() as any;
                    break;
                case 4:
                    message.uri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateFormatSchemaRequest {
        const message = {
            ...baseCreateFormatSchemaRequest,
        } as CreateFormatSchemaRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (
            object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null
        ) {
            message.formatSchemaName = String(object.formatSchemaName);
        } else {
            message.formatSchemaName = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = formatSchemaTypeFromJSON(object.type);
        } else {
            message.type = 0;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = String(object.uri);
        } else {
            message.uri = '';
        }
        return message;
    },

    toJSON(message: CreateFormatSchemaRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.formatSchemaName !== undefined &&
            (obj.formatSchemaName = message.formatSchemaName);
        message.type !== undefined &&
            (obj.type = formatSchemaTypeToJSON(message.type));
        message.uri !== undefined && (obj.uri = message.uri);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateFormatSchemaRequest>
    ): CreateFormatSchemaRequest {
        const message = {
            ...baseCreateFormatSchemaRequest,
        } as CreateFormatSchemaRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (
            object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null
        ) {
            message.formatSchemaName = object.formatSchemaName;
        } else {
            message.formatSchemaName = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        } else {
            message.type = 0;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = object.uri;
        } else {
            message.uri = '';
        }
        return message;
    },
};

const baseCreateFormatSchemaMetadata: object = {
    clusterId: '',
    formatSchemaName: '',
};

export const CreateFormatSchemaMetadata = {
    encode(
        message: CreateFormatSchemaMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.formatSchemaName !== '') {
            writer.uint32(18).string(message.formatSchemaName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateFormatSchemaMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateFormatSchemaMetadata,
        } as CreateFormatSchemaMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.formatSchemaName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateFormatSchemaMetadata {
        const message = {
            ...baseCreateFormatSchemaMetadata,
        } as CreateFormatSchemaMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (
            object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null
        ) {
            message.formatSchemaName = String(object.formatSchemaName);
        } else {
            message.formatSchemaName = '';
        }
        return message;
    },

    toJSON(message: CreateFormatSchemaMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.formatSchemaName !== undefined &&
            (obj.formatSchemaName = message.formatSchemaName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateFormatSchemaMetadata>
    ): CreateFormatSchemaMetadata {
        const message = {
            ...baseCreateFormatSchemaMetadata,
        } as CreateFormatSchemaMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (
            object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null
        ) {
            message.formatSchemaName = object.formatSchemaName;
        } else {
            message.formatSchemaName = '';
        }
        return message;
    },
};

const baseUpdateFormatSchemaRequest: object = {
    clusterId: '',
    formatSchemaName: '',
    uri: '',
};

export const UpdateFormatSchemaRequest = {
    encode(
        message: UpdateFormatSchemaRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.formatSchemaName !== '') {
            writer.uint32(18).string(message.formatSchemaName);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(
                message.updateMask,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.uri !== '') {
            writer.uint32(34).string(message.uri);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateFormatSchemaRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateFormatSchemaRequest,
        } as UpdateFormatSchemaRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.formatSchemaName = reader.string();
                    break;
                case 3:
                    message.updateMask = FieldMask.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 4:
                    message.uri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateFormatSchemaRequest {
        const message = {
            ...baseUpdateFormatSchemaRequest,
        } as UpdateFormatSchemaRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (
            object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null
        ) {
            message.formatSchemaName = String(object.formatSchemaName);
        } else {
            message.formatSchemaName = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = String(object.uri);
        } else {
            message.uri = '';
        }
        return message;
    },

    toJSON(message: UpdateFormatSchemaRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.formatSchemaName !== undefined &&
            (obj.formatSchemaName = message.formatSchemaName);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.uri !== undefined && (obj.uri = message.uri);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateFormatSchemaRequest>
    ): UpdateFormatSchemaRequest {
        const message = {
            ...baseUpdateFormatSchemaRequest,
        } as UpdateFormatSchemaRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (
            object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null
        ) {
            message.formatSchemaName = object.formatSchemaName;
        } else {
            message.formatSchemaName = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = object.uri;
        } else {
            message.uri = '';
        }
        return message;
    },
};

const baseUpdateFormatSchemaMetadata: object = {
    clusterId: '',
    formatSchemaName: '',
};

export const UpdateFormatSchemaMetadata = {
    encode(
        message: UpdateFormatSchemaMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.formatSchemaName !== '') {
            writer.uint32(18).string(message.formatSchemaName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateFormatSchemaMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateFormatSchemaMetadata,
        } as UpdateFormatSchemaMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.formatSchemaName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateFormatSchemaMetadata {
        const message = {
            ...baseUpdateFormatSchemaMetadata,
        } as UpdateFormatSchemaMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (
            object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null
        ) {
            message.formatSchemaName = String(object.formatSchemaName);
        } else {
            message.formatSchemaName = '';
        }
        return message;
    },

    toJSON(message: UpdateFormatSchemaMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.formatSchemaName !== undefined &&
            (obj.formatSchemaName = message.formatSchemaName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateFormatSchemaMetadata>
    ): UpdateFormatSchemaMetadata {
        const message = {
            ...baseUpdateFormatSchemaMetadata,
        } as UpdateFormatSchemaMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (
            object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null
        ) {
            message.formatSchemaName = object.formatSchemaName;
        } else {
            message.formatSchemaName = '';
        }
        return message;
    },
};

const baseDeleteFormatSchemaRequest: object = {
    clusterId: '',
    formatSchemaName: '',
};

export const DeleteFormatSchemaRequest = {
    encode(
        message: DeleteFormatSchemaRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.formatSchemaName !== '') {
            writer.uint32(18).string(message.formatSchemaName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteFormatSchemaRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteFormatSchemaRequest,
        } as DeleteFormatSchemaRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.formatSchemaName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteFormatSchemaRequest {
        const message = {
            ...baseDeleteFormatSchemaRequest,
        } as DeleteFormatSchemaRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (
            object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null
        ) {
            message.formatSchemaName = String(object.formatSchemaName);
        } else {
            message.formatSchemaName = '';
        }
        return message;
    },

    toJSON(message: DeleteFormatSchemaRequest): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.formatSchemaName !== undefined &&
            (obj.formatSchemaName = message.formatSchemaName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteFormatSchemaRequest>
    ): DeleteFormatSchemaRequest {
        const message = {
            ...baseDeleteFormatSchemaRequest,
        } as DeleteFormatSchemaRequest;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (
            object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null
        ) {
            message.formatSchemaName = object.formatSchemaName;
        } else {
            message.formatSchemaName = '';
        }
        return message;
    },
};

const baseDeleteFormatSchemaMetadata: object = {
    clusterId: '',
    formatSchemaName: '',
};

export const DeleteFormatSchemaMetadata = {
    encode(
        message: DeleteFormatSchemaMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.formatSchemaName !== '') {
            writer.uint32(18).string(message.formatSchemaName);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteFormatSchemaMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteFormatSchemaMetadata,
        } as DeleteFormatSchemaMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.formatSchemaName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteFormatSchemaMetadata {
        const message = {
            ...baseDeleteFormatSchemaMetadata,
        } as DeleteFormatSchemaMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        } else {
            message.clusterId = '';
        }
        if (
            object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null
        ) {
            message.formatSchemaName = String(object.formatSchemaName);
        } else {
            message.formatSchemaName = '';
        }
        return message;
    },

    toJSON(message: DeleteFormatSchemaMetadata): unknown {
        const obj: any = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.formatSchemaName !== undefined &&
            (obj.formatSchemaName = message.formatSchemaName);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteFormatSchemaMetadata>
    ): DeleteFormatSchemaMetadata {
        const message = {
            ...baseDeleteFormatSchemaMetadata,
        } as DeleteFormatSchemaMetadata;
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        } else {
            message.clusterId = '';
        }
        if (
            object.formatSchemaName !== undefined &&
            object.formatSchemaName !== null
        ) {
            message.formatSchemaName = object.formatSchemaName;
        } else {
            message.formatSchemaName = '';
        }
        return message;
    },
};

export const FormatSchemaServiceService = {
    get: {
        path: '/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetFormatSchemaRequest) =>
            Buffer.from(GetFormatSchemaRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetFormatSchemaRequest.decode(value),
        responseSerialize: (value: FormatSchema) =>
            Buffer.from(FormatSchema.encode(value).finish()),
        responseDeserialize: (value: Buffer) => FormatSchema.decode(value),
    },
    list: {
        path: '/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListFormatSchemasRequest) =>
            Buffer.from(ListFormatSchemasRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListFormatSchemasRequest.decode(value),
        responseSerialize: (value: ListFormatSchemasResponse) =>
            Buffer.from(ListFormatSchemasResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListFormatSchemasResponse.decode(value),
    },
    create: {
        path: '/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateFormatSchemaRequest) =>
            Buffer.from(CreateFormatSchemaRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateFormatSchemaRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    update: {
        path: '/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateFormatSchemaRequest) =>
            Buffer.from(UpdateFormatSchemaRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateFormatSchemaRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    delete: {
        path: '/yandex.cloud.mdb.clickhouse.v1.FormatSchemaService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteFormatSchemaRequest) =>
            Buffer.from(DeleteFormatSchemaRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteFormatSchemaRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface FormatSchemaServiceServer
    extends UntypedServiceImplementation {
    get: handleUnaryCall<GetFormatSchemaRequest, FormatSchema>;
    list: handleUnaryCall<ListFormatSchemasRequest, ListFormatSchemasResponse>;
    create: handleUnaryCall<CreateFormatSchemaRequest, Operation>;
    update: handleUnaryCall<UpdateFormatSchemaRequest, Operation>;
    delete: handleUnaryCall<DeleteFormatSchemaRequest, Operation>;
}

export interface FormatSchemaServiceClient extends Client {
    get(
        request: GetFormatSchemaRequest,
        callback: (error: ServiceError | null, response: FormatSchema) => void
    ): ClientUnaryCall;
    get(
        request: GetFormatSchemaRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: FormatSchema) => void
    ): ClientUnaryCall;
    get(
        request: GetFormatSchemaRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: FormatSchema) => void
    ): ClientUnaryCall;
    list(
        request: ListFormatSchemasRequest,
        callback: (
            error: ServiceError | null,
            response: ListFormatSchemasResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListFormatSchemasRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListFormatSchemasResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListFormatSchemasRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListFormatSchemasResponse
        ) => void
    ): ClientUnaryCall;
    create(
        request: CreateFormatSchemaRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateFormatSchemaRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateFormatSchemaRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateFormatSchemaRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateFormatSchemaRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateFormatSchemaRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteFormatSchemaRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteFormatSchemaRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteFormatSchemaRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
}

export const FormatSchemaServiceClient = makeGenericClientConstructor(
    FormatSchemaServiceService,
    'yandex.cloud.mdb.clickhouse.v1.FormatSchemaService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): FormatSchemaServiceClient;
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
