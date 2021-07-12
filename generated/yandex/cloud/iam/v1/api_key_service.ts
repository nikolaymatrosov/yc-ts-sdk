/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { ApiKey } from '../../../../yandex/cloud/iam/v1/api_key';
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

export const protobufPackage = 'yandex.cloud.iam.v1';

export interface GetApiKeyRequest {
    /**
     * ID of the API key to return.
     * To get the API key ID, use a [ApiKeyService.List] request.
     */
    apiKeyId: string;
}

export interface ListApiKeysRequest {
    /**
     * ID of the service account to list API keys for.
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     * If not specified, it defaults to the subject that made the request.
     */
    serviceAccountId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListApiKeysResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListApiKeysResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}

export interface ListApiKeysResponse {
    /** List of API keys. */
    apiKeys: ApiKey[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListApiKeysRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListApiKeysRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateApiKeyRequest {
    /**
     * ID of the service account to create an API key for.
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     * If not specified, it defaults to the subject that made the request.
     */
    serviceAccountId: string;
    /** Description of the API key. */
    description: string;
}

export interface CreateApiKeyResponse {
    /** ApiKey resource. */
    apiKey: ApiKey | undefined;
    /** Secret part of the API key. This secret key you may use in the requests for authentication. */
    secret: string;
}

export interface UpdateApiKeyRequest {
    /**
     * ID of the ApiKey resource to update.
     * To get the API key ID, use a [ApiKeyService.List] request.
     */
    apiKeyId: string;
    /** Field mask that specifies which fields of the ApiKey resource are going to be updated. */
    updateMask: FieldMask | undefined;
    /** Description of the API key. */
    description: string;
}

export interface UpdateApiKeyMetadata {
    /** ID of the ApiKey resource that is being updated. */
    apiKeyId: string;
}

export interface DeleteApiKeyRequest {
    /**
     * ID of the API key to delete.
     * To get the API key ID, use a [ApiKeyService.List] request.
     */
    apiKeyId: string;
}

export interface DeleteApiKeyMetadata {
    /** ID of the API key that is being deleted. */
    apiKeyId: string;
}

export interface ListApiKeyOperationsRequest {
    /** ID of the key to list operations for. */
    apiKeyId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListApiKeyOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListApiKeyOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListApiKeyOperationsResponse {
    /** List of operations for the specified API key. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListApiKeyOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListApiKeyOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetApiKeyRequest: object = { apiKeyId: '' };

export const GetApiKeyRequest = {
    encode(
        message: GetApiKeyRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.apiKeyId !== '') {
            writer.uint32(10).string(message.apiKeyId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetApiKeyRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetApiKeyRequest } as GetApiKeyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiKeyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetApiKeyRequest {
        const message = { ...baseGetApiKeyRequest } as GetApiKeyRequest;
        if (object.apiKeyId !== undefined && object.apiKeyId !== null) {
            message.apiKeyId = String(object.apiKeyId);
        } else {
            message.apiKeyId = '';
        }
        return message;
    },

    toJSON(message: GetApiKeyRequest): unknown {
        const obj: any = {};
        message.apiKeyId !== undefined && (obj.apiKeyId = message.apiKeyId);
        return obj;
    },

    fromPartial(object: DeepPartial<GetApiKeyRequest>): GetApiKeyRequest {
        const message = { ...baseGetApiKeyRequest } as GetApiKeyRequest;
        if (object.apiKeyId !== undefined && object.apiKeyId !== null) {
            message.apiKeyId = object.apiKeyId;
        } else {
            message.apiKeyId = '';
        }
        return message;
    },
};

const baseListApiKeysRequest: object = {
    serviceAccountId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListApiKeysRequest = {
    encode(
        message: ListApiKeysRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
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
    ): ListApiKeysRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListApiKeysRequest } as ListApiKeysRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
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

    fromJSON(object: any): ListApiKeysRequest {
        const message = { ...baseListApiKeysRequest } as ListApiKeysRequest;
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
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

    toJSON(message: ListApiKeysRequest): unknown {
        const obj: any = {};
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(object: DeepPartial<ListApiKeysRequest>): ListApiKeysRequest {
        const message = { ...baseListApiKeysRequest } as ListApiKeysRequest;
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
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

const baseListApiKeysResponse: object = { nextPageToken: '' };

export const ListApiKeysResponse = {
    encode(
        message: ListApiKeysResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.apiKeys) {
            ApiKey.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListApiKeysResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListApiKeysResponse } as ListApiKeysResponse;
        message.apiKeys = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiKeys.push(
                        ApiKey.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListApiKeysResponse {
        const message = { ...baseListApiKeysResponse } as ListApiKeysResponse;
        message.apiKeys = [];
        if (object.apiKeys !== undefined && object.apiKeys !== null) {
            for (const e of object.apiKeys) {
                message.apiKeys.push(ApiKey.fromJSON(e));
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

    toJSON(message: ListApiKeysResponse): unknown {
        const obj: any = {};
        if (message.apiKeys) {
            obj.apiKeys = message.apiKeys.map((e) =>
                e ? ApiKey.toJSON(e) : undefined
            );
        } else {
            obj.apiKeys = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(object: DeepPartial<ListApiKeysResponse>): ListApiKeysResponse {
        const message = { ...baseListApiKeysResponse } as ListApiKeysResponse;
        message.apiKeys = [];
        if (object.apiKeys !== undefined && object.apiKeys !== null) {
            for (const e of object.apiKeys) {
                message.apiKeys.push(ApiKey.fromPartial(e));
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

const baseCreateApiKeyRequest: object = {
    serviceAccountId: '',
    description: '',
};

export const CreateApiKeyRequest = {
    encode(
        message: CreateApiKeyRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateApiKeyRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateApiKeyRequest } as CreateApiKeyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateApiKeyRequest {
        const message = { ...baseCreateApiKeyRequest } as CreateApiKeyRequest;
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = '';
        }
        return message;
    },

    toJSON(message: CreateApiKeyRequest): unknown {
        const obj: any = {};
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },

    fromPartial(object: DeepPartial<CreateApiKeyRequest>): CreateApiKeyRequest {
        const message = { ...baseCreateApiKeyRequest } as CreateApiKeyRequest;
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = '';
        }
        return message;
    },
};

const baseCreateApiKeyResponse: object = { secret: '' };

export const CreateApiKeyResponse = {
    encode(
        message: CreateApiKeyResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.apiKey !== undefined) {
            ApiKey.encode(message.apiKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.secret !== '') {
            writer.uint32(18).string(message.secret);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateApiKeyResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateApiKeyResponse } as CreateApiKeyResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiKey = ApiKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.secret = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateApiKeyResponse {
        const message = { ...baseCreateApiKeyResponse } as CreateApiKeyResponse;
        if (object.apiKey !== undefined && object.apiKey !== null) {
            message.apiKey = ApiKey.fromJSON(object.apiKey);
        } else {
            message.apiKey = undefined;
        }
        if (object.secret !== undefined && object.secret !== null) {
            message.secret = String(object.secret);
        } else {
            message.secret = '';
        }
        return message;
    },

    toJSON(message: CreateApiKeyResponse): unknown {
        const obj: any = {};
        message.apiKey !== undefined &&
            (obj.apiKey = message.apiKey
                ? ApiKey.toJSON(message.apiKey)
                : undefined);
        message.secret !== undefined && (obj.secret = message.secret);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateApiKeyResponse>
    ): CreateApiKeyResponse {
        const message = { ...baseCreateApiKeyResponse } as CreateApiKeyResponse;
        if (object.apiKey !== undefined && object.apiKey !== null) {
            message.apiKey = ApiKey.fromPartial(object.apiKey);
        } else {
            message.apiKey = undefined;
        }
        if (object.secret !== undefined && object.secret !== null) {
            message.secret = object.secret;
        } else {
            message.secret = '';
        }
        return message;
    },
};

const baseUpdateApiKeyRequest: object = { apiKeyId: '', description: '' };

export const UpdateApiKeyRequest = {
    encode(
        message: UpdateApiKeyRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.apiKeyId !== '') {
            writer.uint32(10).string(message.apiKeyId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(
                message.updateMask,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateApiKeyRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateApiKeyRequest } as UpdateApiKeyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiKeyId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateApiKeyRequest {
        const message = { ...baseUpdateApiKeyRequest } as UpdateApiKeyRequest;
        if (object.apiKeyId !== undefined && object.apiKeyId !== null) {
            message.apiKeyId = String(object.apiKeyId);
        } else {
            message.apiKeyId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = '';
        }
        return message;
    },

    toJSON(message: UpdateApiKeyRequest): unknown {
        const obj: any = {};
        message.apiKeyId !== undefined && (obj.apiKeyId = message.apiKeyId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },

    fromPartial(object: DeepPartial<UpdateApiKeyRequest>): UpdateApiKeyRequest {
        const message = { ...baseUpdateApiKeyRequest } as UpdateApiKeyRequest;
        if (object.apiKeyId !== undefined && object.apiKeyId !== null) {
            message.apiKeyId = object.apiKeyId;
        } else {
            message.apiKeyId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = '';
        }
        return message;
    },
};

const baseUpdateApiKeyMetadata: object = { apiKeyId: '' };

export const UpdateApiKeyMetadata = {
    encode(
        message: UpdateApiKeyMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.apiKeyId !== '') {
            writer.uint32(10).string(message.apiKeyId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateApiKeyMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateApiKeyMetadata } as UpdateApiKeyMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiKeyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateApiKeyMetadata {
        const message = { ...baseUpdateApiKeyMetadata } as UpdateApiKeyMetadata;
        if (object.apiKeyId !== undefined && object.apiKeyId !== null) {
            message.apiKeyId = String(object.apiKeyId);
        } else {
            message.apiKeyId = '';
        }
        return message;
    },

    toJSON(message: UpdateApiKeyMetadata): unknown {
        const obj: any = {};
        message.apiKeyId !== undefined && (obj.apiKeyId = message.apiKeyId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateApiKeyMetadata>
    ): UpdateApiKeyMetadata {
        const message = { ...baseUpdateApiKeyMetadata } as UpdateApiKeyMetadata;
        if (object.apiKeyId !== undefined && object.apiKeyId !== null) {
            message.apiKeyId = object.apiKeyId;
        } else {
            message.apiKeyId = '';
        }
        return message;
    },
};

const baseDeleteApiKeyRequest: object = { apiKeyId: '' };

export const DeleteApiKeyRequest = {
    encode(
        message: DeleteApiKeyRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.apiKeyId !== '') {
            writer.uint32(10).string(message.apiKeyId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteApiKeyRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteApiKeyRequest } as DeleteApiKeyRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiKeyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteApiKeyRequest {
        const message = { ...baseDeleteApiKeyRequest } as DeleteApiKeyRequest;
        if (object.apiKeyId !== undefined && object.apiKeyId !== null) {
            message.apiKeyId = String(object.apiKeyId);
        } else {
            message.apiKeyId = '';
        }
        return message;
    },

    toJSON(message: DeleteApiKeyRequest): unknown {
        const obj: any = {};
        message.apiKeyId !== undefined && (obj.apiKeyId = message.apiKeyId);
        return obj;
    },

    fromPartial(object: DeepPartial<DeleteApiKeyRequest>): DeleteApiKeyRequest {
        const message = { ...baseDeleteApiKeyRequest } as DeleteApiKeyRequest;
        if (object.apiKeyId !== undefined && object.apiKeyId !== null) {
            message.apiKeyId = object.apiKeyId;
        } else {
            message.apiKeyId = '';
        }
        return message;
    },
};

const baseDeleteApiKeyMetadata: object = { apiKeyId: '' };

export const DeleteApiKeyMetadata = {
    encode(
        message: DeleteApiKeyMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.apiKeyId !== '') {
            writer.uint32(10).string(message.apiKeyId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteApiKeyMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteApiKeyMetadata } as DeleteApiKeyMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiKeyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteApiKeyMetadata {
        const message = { ...baseDeleteApiKeyMetadata } as DeleteApiKeyMetadata;
        if (object.apiKeyId !== undefined && object.apiKeyId !== null) {
            message.apiKeyId = String(object.apiKeyId);
        } else {
            message.apiKeyId = '';
        }
        return message;
    },

    toJSON(message: DeleteApiKeyMetadata): unknown {
        const obj: any = {};
        message.apiKeyId !== undefined && (obj.apiKeyId = message.apiKeyId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteApiKeyMetadata>
    ): DeleteApiKeyMetadata {
        const message = { ...baseDeleteApiKeyMetadata } as DeleteApiKeyMetadata;
        if (object.apiKeyId !== undefined && object.apiKeyId !== null) {
            message.apiKeyId = object.apiKeyId;
        } else {
            message.apiKeyId = '';
        }
        return message;
    },
};

const baseListApiKeyOperationsRequest: object = {
    apiKeyId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListApiKeyOperationsRequest = {
    encode(
        message: ListApiKeyOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.apiKeyId !== '') {
            writer.uint32(10).string(message.apiKeyId);
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
    ): ListApiKeyOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListApiKeyOperationsRequest,
        } as ListApiKeyOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiKeyId = reader.string();
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

    fromJSON(object: any): ListApiKeyOperationsRequest {
        const message = {
            ...baseListApiKeyOperationsRequest,
        } as ListApiKeyOperationsRequest;
        if (object.apiKeyId !== undefined && object.apiKeyId !== null) {
            message.apiKeyId = String(object.apiKeyId);
        } else {
            message.apiKeyId = '';
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

    toJSON(message: ListApiKeyOperationsRequest): unknown {
        const obj: any = {};
        message.apiKeyId !== undefined && (obj.apiKeyId = message.apiKeyId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListApiKeyOperationsRequest>
    ): ListApiKeyOperationsRequest {
        const message = {
            ...baseListApiKeyOperationsRequest,
        } as ListApiKeyOperationsRequest;
        if (object.apiKeyId !== undefined && object.apiKeyId !== null) {
            message.apiKeyId = object.apiKeyId;
        } else {
            message.apiKeyId = '';
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

const baseListApiKeyOperationsResponse: object = { nextPageToken: '' };

export const ListApiKeyOperationsResponse = {
    encode(
        message: ListApiKeyOperationsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.operations) {
            Operation.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListApiKeyOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListApiKeyOperationsResponse,
        } as ListApiKeyOperationsResponse;
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(
                        Operation.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListApiKeyOperationsResponse {
        const message = {
            ...baseListApiKeyOperationsResponse,
        } as ListApiKeyOperationsResponse;
        message.operations = [];
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(Operation.fromJSON(e));
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

    toJSON(message: ListApiKeyOperationsResponse): unknown {
        const obj: any = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) =>
                e ? Operation.toJSON(e) : undefined
            );
        } else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListApiKeyOperationsResponse>
    ): ListApiKeyOperationsResponse {
        const message = {
            ...baseListApiKeyOperationsResponse,
        } as ListApiKeyOperationsResponse;
        message.operations = [];
        if (object.operations !== undefined && object.operations !== null) {
            for (const e of object.operations) {
                message.operations.push(Operation.fromPartial(e));
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

/** A set of methods for managing API keys. */
export const ApiKeyServiceService = {
    /** Retrieves the list of API keys for the specified service account. */
    list: {
        path: '/yandex.cloud.iam.v1.ApiKeyService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListApiKeysRequest) =>
            Buffer.from(ListApiKeysRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListApiKeysRequest.decode(value),
        responseSerialize: (value: ListApiKeysResponse) =>
            Buffer.from(ListApiKeysResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListApiKeysResponse.decode(value),
    },
    /**
     * Returns the specified API key.
     *
     * To get the list of available API keys, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.iam.v1.ApiKeyService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetApiKeyRequest) =>
            Buffer.from(GetApiKeyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetApiKeyRequest.decode(value),
        responseSerialize: (value: ApiKey) =>
            Buffer.from(ApiKey.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ApiKey.decode(value),
    },
    /** Creates an API key for the specified service account. */
    create: {
        path: '/yandex.cloud.iam.v1.ApiKeyService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateApiKeyRequest) =>
            Buffer.from(CreateApiKeyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateApiKeyRequest.decode(value),
        responseSerialize: (value: CreateApiKeyResponse) =>
            Buffer.from(CreateApiKeyResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            CreateApiKeyResponse.decode(value),
    },
    /** Updates the specified API key. */
    update: {
        path: '/yandex.cloud.iam.v1.ApiKeyService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateApiKeyRequest) =>
            Buffer.from(UpdateApiKeyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateApiKeyRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified API key. */
    delete: {
        path: '/yandex.cloud.iam.v1.ApiKeyService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteApiKeyRequest) =>
            Buffer.from(DeleteApiKeyRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteApiKeyRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Retrieves the list of operations for the specified API key. */
    listOperations: {
        path: '/yandex.cloud.iam.v1.ApiKeyService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListApiKeyOperationsRequest) =>
            Buffer.from(ListApiKeyOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListApiKeyOperationsRequest.decode(value),
        responseSerialize: (value: ListApiKeyOperationsResponse) =>
            Buffer.from(ListApiKeyOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListApiKeyOperationsResponse.decode(value),
    },
} as const;

export interface ApiKeyServiceServer extends UntypedServiceImplementation {
    /** Retrieves the list of API keys for the specified service account. */
    list: handleUnaryCall<ListApiKeysRequest, ListApiKeysResponse>;
    /**
     * Returns the specified API key.
     *
     * To get the list of available API keys, make a [List] request.
     */
    get: handleUnaryCall<GetApiKeyRequest, ApiKey>;
    /** Creates an API key for the specified service account. */
    create: handleUnaryCall<CreateApiKeyRequest, CreateApiKeyResponse>;
    /** Updates the specified API key. */
    update: handleUnaryCall<UpdateApiKeyRequest, Operation>;
    /** Deletes the specified API key. */
    delete: handleUnaryCall<DeleteApiKeyRequest, Operation>;
    /** Retrieves the list of operations for the specified API key. */
    listOperations: handleUnaryCall<
        ListApiKeyOperationsRequest,
        ListApiKeyOperationsResponse
    >;
}

export interface ApiKeyServiceClient extends Client {
    /** Retrieves the list of API keys for the specified service account. */
    list(
        request: ListApiKeysRequest,
        callback: (
            error: ServiceError | null,
            response: ListApiKeysResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListApiKeysRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListApiKeysResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListApiKeysRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListApiKeysResponse
        ) => void
    ): ClientUnaryCall;
    /**
     * Returns the specified API key.
     *
     * To get the list of available API keys, make a [List] request.
     */
    get(
        request: GetApiKeyRequest,
        callback: (error: ServiceError | null, response: ApiKey) => void
    ): ClientUnaryCall;
    get(
        request: GetApiKeyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ApiKey) => void
    ): ClientUnaryCall;
    get(
        request: GetApiKeyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ApiKey) => void
    ): ClientUnaryCall;
    /** Creates an API key for the specified service account. */
    create(
        request: CreateApiKeyRequest,
        callback: (
            error: ServiceError | null,
            response: CreateApiKeyResponse
        ) => void
    ): ClientUnaryCall;
    create(
        request: CreateApiKeyRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: CreateApiKeyResponse
        ) => void
    ): ClientUnaryCall;
    create(
        request: CreateApiKeyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: CreateApiKeyResponse
        ) => void
    ): ClientUnaryCall;
    /** Updates the specified API key. */
    update(
        request: UpdateApiKeyRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateApiKeyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateApiKeyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified API key. */
    delete(
        request: DeleteApiKeyRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteApiKeyRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteApiKeyRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Retrieves the list of operations for the specified API key. */
    listOperations(
        request: ListApiKeyOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListApiKeyOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListApiKeyOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListApiKeyOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListApiKeyOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListApiKeyOperationsResponse
        ) => void
    ): ClientUnaryCall;
}

export const ApiKeyServiceClient = makeGenericClientConstructor(
    ApiKeyServiceService,
    'yandex.cloud.iam.v1.ApiKeyService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): ApiKeyServiceClient;
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
