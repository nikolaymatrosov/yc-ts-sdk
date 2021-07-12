/* eslint-disable */
import { FieldMask } from '../../../../../google/protobuf/field_mask';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../../../../yandex/cloud/access/access';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { ApiGateway } from '../../../../../yandex/cloud/serverless/apigateway/v1/apigateway';
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

export const protobufPackage = 'yandex.cloud.serverless.apigateway.v1';

export interface GetApiGatewayRequest {
    /**
     * ID of the API gateway to return.
     *
     * To get a API gateway ID make a [ApiGatewayService.List] request.
     */
    apiGatewayId: string;
}

export interface ListApiGatewayRequest {
    /**
     * ID of the folder to list API gateways in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `pageSize`, the service returns a [ListApiGatewayResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListApiGatewayResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters functions listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can only be applied to the [ApiGateway.name] field.
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN`
     * for lists of values.
     * 3. The value. Must be 1-63 characters long and match the regular expression `^[a-z]([-a-z0-9]{0,61}[a-z0-9])?$`.
     * Example of a filter: `name=my-apigw`.
     */
    filter: string;
}

export interface ListApiGatewayResponse {
    /** List of API gateways in the specified folder. */
    apiGateways: ApiGateway[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListApiGatewayRequest.page_size], use `nextPageToken` as the value
     * for the [ListApiGatewayRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateApiGatewayRequest {
    /**
     * ID of the folder to create an API gateway in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the API gateway.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the API gateway. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: { [key: string]: string };
    /** The text of specification, JSON or YAML. */
    openapiSpec: string | undefined;
}

export interface CreateApiGatewayRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateApiGatewayRequest {
    /**
     * ID of the API gateway to update.
     *
     * To get a API gateway ID make a [ApiGatewayService.List] request.
     */
    apiGatewayId: string;
    /** Field mask that specifies which attributes of the API gateway should be updated. */
    updateMask: FieldMask | undefined;
    /**
     * New name for the API gateway.
     * The name must be unique within the folder.
     */
    name: string;
    /** New description for the API gateway. */
    description: string;
    /**
     * API gateway labels as `key:value` pairs.
     *
     * Existing set of labels is completely replaced by the provided set, so if you just want
     * to add or remove a label, request the current set of labels with a [ApiGatewayService.Get] request.
     */
    labels: { [key: string]: string };
    /** The text of specification, JSON or YAML. */
    openapiSpec: string | undefined;
}

export interface UpdateApiGatewayRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface DeleteApiGatewayRequest {
    /**
     * ID of the API gateway to update.
     *
     * To get a API gateway ID make a [ApiGatewayService.List] request.
     */
    apiGatewayId: string;
}

export interface AddDomainRequest {
    /** ID of the API gateway that the domain is attached to. */
    apiGatewayId: string;
    /** ID of the attaching domain. */
    domainId: string;
}

export interface RemoveDomainRequest {
    /** ID of the API gateway from which the domain is being detached. */
    apiGatewayId: string;
    /** ID of the detaching domain. */
    domainId: string;
}

export interface CreateApiGatewayMetadata {
    /** ID of the API gateway that is being created. */
    apiGatewayId: string;
}

export interface UpdateApiGatewayMetadata {
    /** ID of the API gateway that is being updated. */
    apiGatewayId: string;
}

export interface DeleteApiGatewayMetadata {
    /** ID of the API gateway that is being deleted. */
    apiGatewayId: string;
}

export interface AddDomainMetadata {
    /** ID of the API gateway that the domain is attached to. */
    apiGatewayId: string;
    /** ID of the attaching domain. */
    domainId: string;
}

export interface RemoveDomainMetadata {
    /** ID of the API gateway from which the domain is being detached. */
    apiGatewayId: string;
    /** ID of the detaching domain. */
    domainId: string;
}

export interface ListOperationsRequest {
    /** ID of the API gateway to list operations for. */
    apiGatewayId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `pageSize`, the service returns a [ListOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can be applied to the [operation.Operation.done], [operation.Operation.created_by] field.
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN`
     * for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     * Examples of a filter: `done=false`, `created_by='John.Doe'`.
     */
    filter: string;
}

export interface ListOperationsResponse {
    /** List of operations for the specified API gateway. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListOperationsRequest.page_size], use `nextPageToken` as the value
     * for the [ListOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface GetOpenapiSpecRequest {
    /** ID of the API gateway to get specification from. */
    apiGatewayId: string;
    /** Format of returned specification. Default is the original format used in [CreateApiGatewayRequest]. */
    format: GetOpenapiSpecRequest_Format;
}

export enum GetOpenapiSpecRequest_Format {
    FORMAT_UNSPECIFIED = 0,
    JSON = 1,
    YAML = 2,
    UNRECOGNIZED = -1,
}

export function getOpenapiSpecRequest_FormatFromJSON(
    object: any
): GetOpenapiSpecRequest_Format {
    switch (object) {
        case 0:
        case 'FORMAT_UNSPECIFIED':
            return GetOpenapiSpecRequest_Format.FORMAT_UNSPECIFIED;
        case 1:
        case 'JSON':
            return GetOpenapiSpecRequest_Format.JSON;
        case 2:
        case 'YAML':
            return GetOpenapiSpecRequest_Format.YAML;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return GetOpenapiSpecRequest_Format.UNRECOGNIZED;
    }
}

export function getOpenapiSpecRequest_FormatToJSON(
    object: GetOpenapiSpecRequest_Format
): string {
    switch (object) {
        case GetOpenapiSpecRequest_Format.FORMAT_UNSPECIFIED:
            return 'FORMAT_UNSPECIFIED';
        case GetOpenapiSpecRequest_Format.JSON:
            return 'JSON';
        case GetOpenapiSpecRequest_Format.YAML:
            return 'YAML';
        default:
            return 'UNKNOWN';
    }
}

export interface GetOpenapiSpecResponse {
    /** ID of the API gateway. */
    apiGatewayId: string;
    /** The text of specification, JSON or YAML. */
    openapiSpec: string;
}

const baseGetApiGatewayRequest: object = { apiGatewayId: '' };

export const GetApiGatewayRequest = {
    encode(
        message: GetApiGatewayRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.apiGatewayId !== '') {
            writer.uint32(10).string(message.apiGatewayId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetApiGatewayRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetApiGatewayRequest } as GetApiGatewayRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetApiGatewayRequest {
        const message = { ...baseGetApiGatewayRequest } as GetApiGatewayRequest;
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = String(object.apiGatewayId);
        } else {
            message.apiGatewayId = '';
        }
        return message;
    },

    toJSON(message: GetApiGatewayRequest): unknown {
        const obj: any = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetApiGatewayRequest>
    ): GetApiGatewayRequest {
        const message = { ...baseGetApiGatewayRequest } as GetApiGatewayRequest;
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = object.apiGatewayId;
        } else {
            message.apiGatewayId = '';
        }
        return message;
    },
};

const baseListApiGatewayRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListApiGatewayRequest = {
    encode(
        message: ListApiGatewayRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListApiGatewayRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListApiGatewayRequest,
        } as ListApiGatewayRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListApiGatewayRequest {
        const message = {
            ...baseListApiGatewayRequest,
        } as ListApiGatewayRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
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
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = String(object.filter);
        } else {
            message.filter = '';
        }
        return message;
    },

    toJSON(message: ListApiGatewayRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListApiGatewayRequest>
    ): ListApiGatewayRequest {
        const message = {
            ...baseListApiGatewayRequest,
        } as ListApiGatewayRequest;
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
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
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = object.filter;
        } else {
            message.filter = '';
        }
        return message;
    },
};

const baseListApiGatewayResponse: object = { nextPageToken: '' };

export const ListApiGatewayResponse = {
    encode(
        message: ListApiGatewayResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.apiGateways) {
            ApiGateway.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListApiGatewayResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListApiGatewayResponse,
        } as ListApiGatewayResponse;
        message.apiGateways = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGateways.push(
                        ApiGateway.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListApiGatewayResponse {
        const message = {
            ...baseListApiGatewayResponse,
        } as ListApiGatewayResponse;
        message.apiGateways = [];
        if (object.apiGateways !== undefined && object.apiGateways !== null) {
            for (const e of object.apiGateways) {
                message.apiGateways.push(ApiGateway.fromJSON(e));
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

    toJSON(message: ListApiGatewayResponse): unknown {
        const obj: any = {};
        if (message.apiGateways) {
            obj.apiGateways = message.apiGateways.map((e) =>
                e ? ApiGateway.toJSON(e) : undefined
            );
        } else {
            obj.apiGateways = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListApiGatewayResponse>
    ): ListApiGatewayResponse {
        const message = {
            ...baseListApiGatewayResponse,
        } as ListApiGatewayResponse;
        message.apiGateways = [];
        if (object.apiGateways !== undefined && object.apiGateways !== null) {
            for (const e of object.apiGateways) {
                message.apiGateways.push(ApiGateway.fromPartial(e));
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

const baseCreateApiGatewayRequest: object = {
    folderId: '',
    name: '',
    description: '',
};

export const CreateApiGatewayRequest = {
    encode(
        message: CreateApiGatewayRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            CreateApiGatewayRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork()
            ).ldelim();
        });
        if (message.openapiSpec !== undefined) {
            writer.uint32(42).string(message.openapiSpec);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateApiGatewayRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateApiGatewayRequest,
        } as CreateApiGatewayRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = CreateApiGatewayRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.openapiSpec = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateApiGatewayRequest {
        const message = {
            ...baseCreateApiGatewayRequest,
        } as CreateApiGatewayRequest;
        message.labels = {};
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        } else {
            message.folderId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.openapiSpec !== undefined && object.openapiSpec !== null) {
            message.openapiSpec = String(object.openapiSpec);
        } else {
            message.openapiSpec = undefined;
        }
        return message;
    },

    toJSON(message: CreateApiGatewayRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.openapiSpec !== undefined &&
            (obj.openapiSpec = message.openapiSpec);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateApiGatewayRequest>
    ): CreateApiGatewayRequest {
        const message = {
            ...baseCreateApiGatewayRequest,
        } as CreateApiGatewayRequest;
        message.labels = {};
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        } else {
            message.folderId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (object.openapiSpec !== undefined && object.openapiSpec !== null) {
            message.openapiSpec = object.openapiSpec;
        } else {
            message.openapiSpec = undefined;
        }
        return message;
    },
};

const baseCreateApiGatewayRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateApiGatewayRequest_LabelsEntry = {
    encode(
        message: CreateApiGatewayRequest_LabelsEntry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateApiGatewayRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateApiGatewayRequest_LabelsEntry,
        } as CreateApiGatewayRequest_LabelsEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateApiGatewayRequest_LabelsEntry {
        const message = {
            ...baseCreateApiGatewayRequest_LabelsEntry,
        } as CreateApiGatewayRequest_LabelsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        } else {
            message.value = '';
        }
        return message;
    },

    toJSON(message: CreateApiGatewayRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateApiGatewayRequest_LabelsEntry>
    ): CreateApiGatewayRequest_LabelsEntry {
        const message = {
            ...baseCreateApiGatewayRequest_LabelsEntry,
        } as CreateApiGatewayRequest_LabelsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = '';
        }
        return message;
    },
};

const baseUpdateApiGatewayRequest: object = {
    apiGatewayId: '',
    name: '',
    description: '',
};

export const UpdateApiGatewayRequest = {
    encode(
        message: UpdateApiGatewayRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.apiGatewayId !== '') {
            writer.uint32(10).string(message.apiGatewayId);
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(
                message.updateMask,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateApiGatewayRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        if (message.openapiSpec !== undefined) {
            writer.uint32(50).string(message.openapiSpec);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateApiGatewayRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateApiGatewayRequest,
        } as UpdateApiGatewayRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                case 2:
                    message.updateMask = FieldMask.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = UpdateApiGatewayRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.openapiSpec = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateApiGatewayRequest {
        const message = {
            ...baseUpdateApiGatewayRequest,
        } as UpdateApiGatewayRequest;
        message.labels = {};
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = String(object.apiGatewayId);
        } else {
            message.apiGatewayId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromJSON(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        if (object.openapiSpec !== undefined && object.openapiSpec !== null) {
            message.openapiSpec = String(object.openapiSpec);
        } else {
            message.openapiSpec = undefined;
        }
        return message;
    },

    toJSON(message: UpdateApiGatewayRequest): unknown {
        const obj: any = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.openapiSpec !== undefined &&
            (obj.openapiSpec = message.openapiSpec);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateApiGatewayRequest>
    ): UpdateApiGatewayRequest {
        const message = {
            ...baseUpdateApiGatewayRequest,
        } as UpdateApiGatewayRequest;
        message.labels = {};
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = object.apiGatewayId;
        } else {
            message.apiGatewayId = '';
        }
        if (object.updateMask !== undefined && object.updateMask !== null) {
            message.updateMask = FieldMask.fromPartial(object.updateMask);
        } else {
            message.updateMask = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.labels[key] = String(value);
                }
            });
        }
        if (object.openapiSpec !== undefined && object.openapiSpec !== null) {
            message.openapiSpec = object.openapiSpec;
        } else {
            message.openapiSpec = undefined;
        }
        return message;
    },
};

const baseUpdateApiGatewayRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateApiGatewayRequest_LabelsEntry = {
    encode(
        message: UpdateApiGatewayRequest_LabelsEntry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateApiGatewayRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateApiGatewayRequest_LabelsEntry,
        } as UpdateApiGatewayRequest_LabelsEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateApiGatewayRequest_LabelsEntry {
        const message = {
            ...baseUpdateApiGatewayRequest_LabelsEntry,
        } as UpdateApiGatewayRequest_LabelsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        } else {
            message.value = '';
        }
        return message;
    },

    toJSON(message: UpdateApiGatewayRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateApiGatewayRequest_LabelsEntry>
    ): UpdateApiGatewayRequest_LabelsEntry {
        const message = {
            ...baseUpdateApiGatewayRequest_LabelsEntry,
        } as UpdateApiGatewayRequest_LabelsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = '';
        }
        return message;
    },
};

const baseDeleteApiGatewayRequest: object = { apiGatewayId: '' };

export const DeleteApiGatewayRequest = {
    encode(
        message: DeleteApiGatewayRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.apiGatewayId !== '') {
            writer.uint32(10).string(message.apiGatewayId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteApiGatewayRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteApiGatewayRequest,
        } as DeleteApiGatewayRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteApiGatewayRequest {
        const message = {
            ...baseDeleteApiGatewayRequest,
        } as DeleteApiGatewayRequest;
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = String(object.apiGatewayId);
        } else {
            message.apiGatewayId = '';
        }
        return message;
    },

    toJSON(message: DeleteApiGatewayRequest): unknown {
        const obj: any = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteApiGatewayRequest>
    ): DeleteApiGatewayRequest {
        const message = {
            ...baseDeleteApiGatewayRequest,
        } as DeleteApiGatewayRequest;
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = object.apiGatewayId;
        } else {
            message.apiGatewayId = '';
        }
        return message;
    },
};

const baseAddDomainRequest: object = { apiGatewayId: '', domainId: '' };

export const AddDomainRequest = {
    encode(
        message: AddDomainRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.apiGatewayId !== '') {
            writer.uint32(10).string(message.apiGatewayId);
        }
        if (message.domainId !== '') {
            writer.uint32(18).string(message.domainId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AddDomainRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddDomainRequest } as AddDomainRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                case 2:
                    message.domainId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddDomainRequest {
        const message = { ...baseAddDomainRequest } as AddDomainRequest;
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = String(object.apiGatewayId);
        } else {
            message.apiGatewayId = '';
        }
        if (object.domainId !== undefined && object.domainId !== null) {
            message.domainId = String(object.domainId);
        } else {
            message.domainId = '';
        }
        return message;
    },

    toJSON(message: AddDomainRequest): unknown {
        const obj: any = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        message.domainId !== undefined && (obj.domainId = message.domainId);
        return obj;
    },

    fromPartial(object: DeepPartial<AddDomainRequest>): AddDomainRequest {
        const message = { ...baseAddDomainRequest } as AddDomainRequest;
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = object.apiGatewayId;
        } else {
            message.apiGatewayId = '';
        }
        if (object.domainId !== undefined && object.domainId !== null) {
            message.domainId = object.domainId;
        } else {
            message.domainId = '';
        }
        return message;
    },
};

const baseRemoveDomainRequest: object = { apiGatewayId: '', domainId: '' };

export const RemoveDomainRequest = {
    encode(
        message: RemoveDomainRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.apiGatewayId !== '') {
            writer.uint32(10).string(message.apiGatewayId);
        }
        if (message.domainId !== '') {
            writer.uint32(18).string(message.domainId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): RemoveDomainRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRemoveDomainRequest } as RemoveDomainRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                case 2:
                    message.domainId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RemoveDomainRequest {
        const message = { ...baseRemoveDomainRequest } as RemoveDomainRequest;
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = String(object.apiGatewayId);
        } else {
            message.apiGatewayId = '';
        }
        if (object.domainId !== undefined && object.domainId !== null) {
            message.domainId = String(object.domainId);
        } else {
            message.domainId = '';
        }
        return message;
    },

    toJSON(message: RemoveDomainRequest): unknown {
        const obj: any = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        message.domainId !== undefined && (obj.domainId = message.domainId);
        return obj;
    },

    fromPartial(object: DeepPartial<RemoveDomainRequest>): RemoveDomainRequest {
        const message = { ...baseRemoveDomainRequest } as RemoveDomainRequest;
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = object.apiGatewayId;
        } else {
            message.apiGatewayId = '';
        }
        if (object.domainId !== undefined && object.domainId !== null) {
            message.domainId = object.domainId;
        } else {
            message.domainId = '';
        }
        return message;
    },
};

const baseCreateApiGatewayMetadata: object = { apiGatewayId: '' };

export const CreateApiGatewayMetadata = {
    encode(
        message: CreateApiGatewayMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.apiGatewayId !== '') {
            writer.uint32(10).string(message.apiGatewayId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateApiGatewayMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateApiGatewayMetadata,
        } as CreateApiGatewayMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateApiGatewayMetadata {
        const message = {
            ...baseCreateApiGatewayMetadata,
        } as CreateApiGatewayMetadata;
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = String(object.apiGatewayId);
        } else {
            message.apiGatewayId = '';
        }
        return message;
    },

    toJSON(message: CreateApiGatewayMetadata): unknown {
        const obj: any = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateApiGatewayMetadata>
    ): CreateApiGatewayMetadata {
        const message = {
            ...baseCreateApiGatewayMetadata,
        } as CreateApiGatewayMetadata;
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = object.apiGatewayId;
        } else {
            message.apiGatewayId = '';
        }
        return message;
    },
};

const baseUpdateApiGatewayMetadata: object = { apiGatewayId: '' };

export const UpdateApiGatewayMetadata = {
    encode(
        message: UpdateApiGatewayMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.apiGatewayId !== '') {
            writer.uint32(10).string(message.apiGatewayId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateApiGatewayMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateApiGatewayMetadata,
        } as UpdateApiGatewayMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateApiGatewayMetadata {
        const message = {
            ...baseUpdateApiGatewayMetadata,
        } as UpdateApiGatewayMetadata;
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = String(object.apiGatewayId);
        } else {
            message.apiGatewayId = '';
        }
        return message;
    },

    toJSON(message: UpdateApiGatewayMetadata): unknown {
        const obj: any = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateApiGatewayMetadata>
    ): UpdateApiGatewayMetadata {
        const message = {
            ...baseUpdateApiGatewayMetadata,
        } as UpdateApiGatewayMetadata;
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = object.apiGatewayId;
        } else {
            message.apiGatewayId = '';
        }
        return message;
    },
};

const baseDeleteApiGatewayMetadata: object = { apiGatewayId: '' };

export const DeleteApiGatewayMetadata = {
    encode(
        message: DeleteApiGatewayMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.apiGatewayId !== '') {
            writer.uint32(10).string(message.apiGatewayId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteApiGatewayMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteApiGatewayMetadata,
        } as DeleteApiGatewayMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteApiGatewayMetadata {
        const message = {
            ...baseDeleteApiGatewayMetadata,
        } as DeleteApiGatewayMetadata;
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = String(object.apiGatewayId);
        } else {
            message.apiGatewayId = '';
        }
        return message;
    },

    toJSON(message: DeleteApiGatewayMetadata): unknown {
        const obj: any = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteApiGatewayMetadata>
    ): DeleteApiGatewayMetadata {
        const message = {
            ...baseDeleteApiGatewayMetadata,
        } as DeleteApiGatewayMetadata;
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = object.apiGatewayId;
        } else {
            message.apiGatewayId = '';
        }
        return message;
    },
};

const baseAddDomainMetadata: object = { apiGatewayId: '', domainId: '' };

export const AddDomainMetadata = {
    encode(
        message: AddDomainMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.apiGatewayId !== '') {
            writer.uint32(10).string(message.apiGatewayId);
        }
        if (message.domainId !== '') {
            writer.uint32(18).string(message.domainId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AddDomainMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAddDomainMetadata } as AddDomainMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                case 2:
                    message.domainId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AddDomainMetadata {
        const message = { ...baseAddDomainMetadata } as AddDomainMetadata;
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = String(object.apiGatewayId);
        } else {
            message.apiGatewayId = '';
        }
        if (object.domainId !== undefined && object.domainId !== null) {
            message.domainId = String(object.domainId);
        } else {
            message.domainId = '';
        }
        return message;
    },

    toJSON(message: AddDomainMetadata): unknown {
        const obj: any = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        message.domainId !== undefined && (obj.domainId = message.domainId);
        return obj;
    },

    fromPartial(object: DeepPartial<AddDomainMetadata>): AddDomainMetadata {
        const message = { ...baseAddDomainMetadata } as AddDomainMetadata;
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = object.apiGatewayId;
        } else {
            message.apiGatewayId = '';
        }
        if (object.domainId !== undefined && object.domainId !== null) {
            message.domainId = object.domainId;
        } else {
            message.domainId = '';
        }
        return message;
    },
};

const baseRemoveDomainMetadata: object = { apiGatewayId: '', domainId: '' };

export const RemoveDomainMetadata = {
    encode(
        message: RemoveDomainMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.apiGatewayId !== '') {
            writer.uint32(10).string(message.apiGatewayId);
        }
        if (message.domainId !== '') {
            writer.uint32(18).string(message.domainId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): RemoveDomainMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRemoveDomainMetadata } as RemoveDomainMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                case 2:
                    message.domainId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RemoveDomainMetadata {
        const message = { ...baseRemoveDomainMetadata } as RemoveDomainMetadata;
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = String(object.apiGatewayId);
        } else {
            message.apiGatewayId = '';
        }
        if (object.domainId !== undefined && object.domainId !== null) {
            message.domainId = String(object.domainId);
        } else {
            message.domainId = '';
        }
        return message;
    },

    toJSON(message: RemoveDomainMetadata): unknown {
        const obj: any = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        message.domainId !== undefined && (obj.domainId = message.domainId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<RemoveDomainMetadata>
    ): RemoveDomainMetadata {
        const message = { ...baseRemoveDomainMetadata } as RemoveDomainMetadata;
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = object.apiGatewayId;
        } else {
            message.apiGatewayId = '';
        }
        if (object.domainId !== undefined && object.domainId !== null) {
            message.domainId = object.domainId;
        } else {
            message.domainId = '';
        }
        return message;
    },
};

const baseListOperationsRequest: object = {
    apiGatewayId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListOperationsRequest = {
    encode(
        message: ListOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.apiGatewayId !== '') {
            writer.uint32(10).string(message.apiGatewayId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(34).string(message.filter);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListOperationsRequest,
        } as ListOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 4:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListOperationsRequest {
        const message = {
            ...baseListOperationsRequest,
        } as ListOperationsRequest;
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = String(object.apiGatewayId);
        } else {
            message.apiGatewayId = '';
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
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = String(object.filter);
        } else {
            message.filter = '';
        }
        return message;
    },

    toJSON(message: ListOperationsRequest): unknown {
        const obj: any = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListOperationsRequest>
    ): ListOperationsRequest {
        const message = {
            ...baseListOperationsRequest,
        } as ListOperationsRequest;
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = object.apiGatewayId;
        } else {
            message.apiGatewayId = '';
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
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = object.filter;
        } else {
            message.filter = '';
        }
        return message;
    },
};

const baseListOperationsResponse: object = { nextPageToken: '' };

export const ListOperationsResponse = {
    encode(
        message: ListOperationsResponse,
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
    ): ListOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListOperationsResponse,
        } as ListOperationsResponse;
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

    fromJSON(object: any): ListOperationsResponse {
        const message = {
            ...baseListOperationsResponse,
        } as ListOperationsResponse;
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

    toJSON(message: ListOperationsResponse): unknown {
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
        object: DeepPartial<ListOperationsResponse>
    ): ListOperationsResponse {
        const message = {
            ...baseListOperationsResponse,
        } as ListOperationsResponse;
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

const baseGetOpenapiSpecRequest: object = { apiGatewayId: '', format: 0 };

export const GetOpenapiSpecRequest = {
    encode(
        message: GetOpenapiSpecRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.apiGatewayId !== '') {
            writer.uint32(10).string(message.apiGatewayId);
        }
        if (message.format !== 0) {
            writer.uint32(16).int32(message.format);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetOpenapiSpecRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetOpenapiSpecRequest,
        } as GetOpenapiSpecRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                case 2:
                    message.format = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetOpenapiSpecRequest {
        const message = {
            ...baseGetOpenapiSpecRequest,
        } as GetOpenapiSpecRequest;
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = String(object.apiGatewayId);
        } else {
            message.apiGatewayId = '';
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = getOpenapiSpecRequest_FormatFromJSON(
                object.format
            );
        } else {
            message.format = 0;
        }
        return message;
    },

    toJSON(message: GetOpenapiSpecRequest): unknown {
        const obj: any = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        message.format !== undefined &&
            (obj.format = getOpenapiSpecRequest_FormatToJSON(message.format));
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetOpenapiSpecRequest>
    ): GetOpenapiSpecRequest {
        const message = {
            ...baseGetOpenapiSpecRequest,
        } as GetOpenapiSpecRequest;
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = object.apiGatewayId;
        } else {
            message.apiGatewayId = '';
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = object.format;
        } else {
            message.format = 0;
        }
        return message;
    },
};

const baseGetOpenapiSpecResponse: object = {
    apiGatewayId: '',
    openapiSpec: '',
};

export const GetOpenapiSpecResponse = {
    encode(
        message: GetOpenapiSpecResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.apiGatewayId !== '') {
            writer.uint32(10).string(message.apiGatewayId);
        }
        if (message.openapiSpec !== '') {
            writer.uint32(18).string(message.openapiSpec);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetOpenapiSpecResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetOpenapiSpecResponse,
        } as GetOpenapiSpecResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiGatewayId = reader.string();
                    break;
                case 2:
                    message.openapiSpec = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetOpenapiSpecResponse {
        const message = {
            ...baseGetOpenapiSpecResponse,
        } as GetOpenapiSpecResponse;
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = String(object.apiGatewayId);
        } else {
            message.apiGatewayId = '';
        }
        if (object.openapiSpec !== undefined && object.openapiSpec !== null) {
            message.openapiSpec = String(object.openapiSpec);
        } else {
            message.openapiSpec = '';
        }
        return message;
    },

    toJSON(message: GetOpenapiSpecResponse): unknown {
        const obj: any = {};
        message.apiGatewayId !== undefined &&
            (obj.apiGatewayId = message.apiGatewayId);
        message.openapiSpec !== undefined &&
            (obj.openapiSpec = message.openapiSpec);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetOpenapiSpecResponse>
    ): GetOpenapiSpecResponse {
        const message = {
            ...baseGetOpenapiSpecResponse,
        } as GetOpenapiSpecResponse;
        if (object.apiGatewayId !== undefined && object.apiGatewayId !== null) {
            message.apiGatewayId = object.apiGatewayId;
        } else {
            message.apiGatewayId = '';
        }
        if (object.openapiSpec !== undefined && object.openapiSpec !== null) {
            message.openapiSpec = object.openapiSpec;
        } else {
            message.openapiSpec = '';
        }
        return message;
    },
};

/** A set of methods for managing API gateways. */
export const ApiGatewayServiceService = {
    /**
     * Returns the specified API gateway. Note that only API gateway basic attributes are returned.
     * To get associated openapi specification, make a [GetOpenapiSpec] request.
     *
     * To get the list of all available API gateways, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetApiGatewayRequest) =>
            Buffer.from(GetApiGatewayRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetApiGatewayRequest.decode(value),
        responseSerialize: (value: ApiGateway) =>
            Buffer.from(ApiGateway.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ApiGateway.decode(value),
    },
    /** Retrieves the list of API gateways in the specified folder. */
    list: {
        path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListApiGatewayRequest) =>
            Buffer.from(ListApiGatewayRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListApiGatewayRequest.decode(value),
        responseSerialize: (value: ListApiGatewayResponse) =>
            Buffer.from(ListApiGatewayResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListApiGatewayResponse.decode(value),
    },
    /** Creates an API gateway in the specified folder. */
    create: {
        path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateApiGatewayRequest) =>
            Buffer.from(CreateApiGatewayRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateApiGatewayRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified API gateway. */
    update: {
        path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateApiGatewayRequest) =>
            Buffer.from(UpdateApiGatewayRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateApiGatewayRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified API gateway. */
    delete: {
        path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteApiGatewayRequest) =>
            Buffer.from(DeleteApiGatewayRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteApiGatewayRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Attaches domain to the specified API gateway. */
    addDomain: {
        path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/AddDomain',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: AddDomainRequest) =>
            Buffer.from(AddDomainRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => AddDomainRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Detaches domain from the specified API gateway. */
    removeDomain: {
        path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/RemoveDomain',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: RemoveDomainRequest) =>
            Buffer.from(RemoveDomainRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            RemoveDomainRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Returns the OpenAPI specification of specified API gateway. */
    getOpenapiSpec: {
        path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/GetOpenapiSpec',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetOpenapiSpecRequest) =>
            Buffer.from(GetOpenapiSpecRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetOpenapiSpecRequest.decode(value),
        responseSerialize: (value: GetOpenapiSpecResponse) =>
            Buffer.from(GetOpenapiSpecResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            GetOpenapiSpecResponse.decode(value),
    },
    /** Lists operations for the specified API gateway. */
    listOperations: {
        path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListOperationsRequest) =>
            Buffer.from(ListOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListOperationsRequest.decode(value),
        responseSerialize: (value: ListOperationsResponse) =>
            Buffer.from(ListOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListOperationsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified API gateway. */
    listAccessBindings: {
        path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessBindingsRequest) =>
            Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListAccessBindingsResponse) =>
            Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the specified API gateway. */
    setAccessBindings: {
        path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/SetAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: SetAccessBindingsRequest) =>
            Buffer.from(SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            SetAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates access bindings for the specified API gateway. */
    updateAccessBindings: {
        path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessBindingsRequest) =>
            Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface ApiGatewayServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified API gateway. Note that only API gateway basic attributes are returned.
     * To get associated openapi specification, make a [GetOpenapiSpec] request.
     *
     * To get the list of all available API gateways, make a [List] request.
     */
    get: handleUnaryCall<GetApiGatewayRequest, ApiGateway>;
    /** Retrieves the list of API gateways in the specified folder. */
    list: handleUnaryCall<ListApiGatewayRequest, ListApiGatewayResponse>;
    /** Creates an API gateway in the specified folder. */
    create: handleUnaryCall<CreateApiGatewayRequest, Operation>;
    /** Updates the specified API gateway. */
    update: handleUnaryCall<UpdateApiGatewayRequest, Operation>;
    /** Deletes the specified API gateway. */
    delete: handleUnaryCall<DeleteApiGatewayRequest, Operation>;
    /** Attaches domain to the specified API gateway. */
    addDomain: handleUnaryCall<AddDomainRequest, Operation>;
    /** Detaches domain from the specified API gateway. */
    removeDomain: handleUnaryCall<RemoveDomainRequest, Operation>;
    /** Returns the OpenAPI specification of specified API gateway. */
    getOpenapiSpec: handleUnaryCall<
        GetOpenapiSpecRequest,
        GetOpenapiSpecResponse
    >;
    /** Lists operations for the specified API gateway. */
    listOperations: handleUnaryCall<
        ListOperationsRequest,
        ListOperationsResponse
    >;
    /** Lists existing access bindings for the specified API gateway. */
    listAccessBindings: handleUnaryCall<
        ListAccessBindingsRequest,
        ListAccessBindingsResponse
    >;
    /** Sets access bindings for the specified API gateway. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified API gateway. */
    updateAccessBindings: handleUnaryCall<
        UpdateAccessBindingsRequest,
        Operation
    >;
}

export interface ApiGatewayServiceClient extends Client {
    /**
     * Returns the specified API gateway. Note that only API gateway basic attributes are returned.
     * To get associated openapi specification, make a [GetOpenapiSpec] request.
     *
     * To get the list of all available API gateways, make a [List] request.
     */
    get(
        request: GetApiGatewayRequest,
        callback: (error: ServiceError | null, response: ApiGateway) => void
    ): ClientUnaryCall;
    get(
        request: GetApiGatewayRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ApiGateway) => void
    ): ClientUnaryCall;
    get(
        request: GetApiGatewayRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ApiGateway) => void
    ): ClientUnaryCall;
    /** Retrieves the list of API gateways in the specified folder. */
    list(
        request: ListApiGatewayRequest,
        callback: (
            error: ServiceError | null,
            response: ListApiGatewayResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListApiGatewayRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListApiGatewayResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListApiGatewayRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListApiGatewayResponse
        ) => void
    ): ClientUnaryCall;
    /** Creates an API gateway in the specified folder. */
    create(
        request: CreateApiGatewayRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateApiGatewayRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateApiGatewayRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates the specified API gateway. */
    update(
        request: UpdateApiGatewayRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateApiGatewayRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateApiGatewayRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified API gateway. */
    delete(
        request: DeleteApiGatewayRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteApiGatewayRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteApiGatewayRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Attaches domain to the specified API gateway. */
    addDomain(
        request: AddDomainRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    addDomain(
        request: AddDomainRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    addDomain(
        request: AddDomainRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Detaches domain from the specified API gateway. */
    removeDomain(
        request: RemoveDomainRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    removeDomain(
        request: RemoveDomainRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    removeDomain(
        request: RemoveDomainRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Returns the OpenAPI specification of specified API gateway. */
    getOpenapiSpec(
        request: GetOpenapiSpecRequest,
        callback: (
            error: ServiceError | null,
            response: GetOpenapiSpecResponse
        ) => void
    ): ClientUnaryCall;
    getOpenapiSpec(
        request: GetOpenapiSpecRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: GetOpenapiSpecResponse
        ) => void
    ): ClientUnaryCall;
    getOpenapiSpec(
        request: GetOpenapiSpecRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: GetOpenapiSpecResponse
        ) => void
    ): ClientUnaryCall;
    /** Lists operations for the specified API gateway. */
    listOperations(
        request: ListOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListOperationsResponse
        ) => void
    ): ClientUnaryCall;
    /** Lists existing access bindings for the specified API gateway. */
    listAccessBindings(
        request: ListAccessBindingsRequest,
        callback: (
            error: ServiceError | null,
            response: ListAccessBindingsResponse
        ) => void
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListAccessBindingsResponse
        ) => void
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListAccessBindingsResponse
        ) => void
    ): ClientUnaryCall;
    /** Sets access bindings for the specified API gateway. */
    setAccessBindings(
        request: SetAccessBindingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    setAccessBindings(
        request: SetAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates access bindings for the specified API gateway. */
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
}

export const ApiGatewayServiceClient = makeGenericClientConstructor(
    ApiGatewayServiceService,
    'yandex.cloud.serverless.apigateway.v1.ApiGatewayService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): ApiGatewayServiceClient;
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
