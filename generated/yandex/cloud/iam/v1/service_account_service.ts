/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { messageTypeRegistry } from '../../../../typeRegistry';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../../../yandex/cloud/access/access';
import { ServiceAccount } from '../../../../yandex/cloud/iam/v1/service_account';
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

export interface GetServiceAccountRequest {
    $type: 'yandex.cloud.iam.v1.GetServiceAccountRequest';
    /**
     * ID of the ServiceAccount resource to return.
     * To get the service account ID, use a [ServiceAccountService.List] request.
     */
    serviceAccountId: string;
}

export interface ListServiceAccountsRequest {
    $type: 'yandex.cloud.iam.v1.ListServiceAccountsRequest';
    /**
     * ID of the folder to list service accounts in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListServiceAccountsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListServiceAccountsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [ServiceAccount.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     */
    filter: string;
}

export interface ListServiceAccountsResponse {
    $type: 'yandex.cloud.iam.v1.ListServiceAccountsResponse';
    /** List of ServiceAccount resources. */
    serviceAccounts: ServiceAccount[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListServiceAccountsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListServiceAccountsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateServiceAccountRequest {
    $type: 'yandex.cloud.iam.v1.CreateServiceAccountRequest';
    /**
     * ID of the folder to create a service account in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the service account.
     * The name must be unique within the cloud.
     */
    name: string;
    /** Description of the service account. */
    description: string;
    /** Resource labels as `` key:value `` pairs. */
    labels: { [key: string]: string };
}

export interface CreateServiceAccountRequest_LabelsEntry {
    $type: 'yandex.cloud.iam.v1.CreateServiceAccountRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface CreateServiceAccountMetadata {
    $type: 'yandex.cloud.iam.v1.CreateServiceAccountMetadata';
    /** ID of the service account that is being created. */
    serviceAccountId: string;
}

export interface UpdateServiceAccountRequest {
    $type: 'yandex.cloud.iam.v1.UpdateServiceAccountRequest';
    /**
     * ID of the ServiceAccount resource to update.
     * To get the service account ID, use a [ServiceAccountService.List] request.
     */
    serviceAccountId: string;
    /** Field mask that specifies which fields of the ServiceAccount resource are going to be updated. */
    updateMask: FieldMask | undefined;
    /**
     * Name of the service account.
     * The name must be unique within the cloud.
     */
    name: string;
    /** Description of the service account. */
    description: string;
    /** Resource labels as `` key:value `` pairs. */
    labels: { [key: string]: string };
}

export interface UpdateServiceAccountRequest_LabelsEntry {
    $type: 'yandex.cloud.iam.v1.UpdateServiceAccountRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface UpdateServiceAccountMetadata {
    $type: 'yandex.cloud.iam.v1.UpdateServiceAccountMetadata';
    /** ID of the ServiceAccount resource that is being updated. */
    serviceAccountId: string;
}

export interface DeleteServiceAccountRequest {
    $type: 'yandex.cloud.iam.v1.DeleteServiceAccountRequest';
    /**
     * ID of the service account to delete.
     * To get the service account ID, use a [ServiceAccountService.List] request.
     */
    serviceAccountId: string;
}

export interface DeleteServiceAccountMetadata {
    $type: 'yandex.cloud.iam.v1.DeleteServiceAccountMetadata';
    /** ID of the service account that is being deleted. */
    serviceAccountId: string;
}

export interface ListServiceAccountOperationsRequest {
    $type: 'yandex.cloud.iam.v1.ListServiceAccountOperationsRequest';
    /** ID of the ServiceAccount resource to list operations for. */
    serviceAccountId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListServiceAccountOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token]
     * to the [ListServiceAccountOperationsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}

export interface ListServiceAccountOperationsResponse {
    $type: 'yandex.cloud.iam.v1.ListServiceAccountOperationsResponse';
    /** List of operations for the specified service account. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListServiceAccountOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListServiceAccountOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetServiceAccountRequest: object = {
    $type: 'yandex.cloud.iam.v1.GetServiceAccountRequest',
    serviceAccountId: '',
};

export const GetServiceAccountRequest = {
    $type: 'yandex.cloud.iam.v1.GetServiceAccountRequest' as const,

    encode(
        message: GetServiceAccountRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetServiceAccountRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetServiceAccountRequest,
        } as GetServiceAccountRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetServiceAccountRequest {
        const message = {
            ...baseGetServiceAccountRequest,
        } as GetServiceAccountRequest;
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
        }
        return message;
    },

    toJSON(message: GetServiceAccountRequest): unknown {
        const obj: any = {};
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetServiceAccountRequest>
    ): GetServiceAccountRequest {
        const message = {
            ...baseGetServiceAccountRequest,
        } as GetServiceAccountRequest;
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    GetServiceAccountRequest.$type,
    GetServiceAccountRequest
);

const baseListServiceAccountsRequest: object = {
    $type: 'yandex.cloud.iam.v1.ListServiceAccountsRequest',
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListServiceAccountsRequest = {
    $type: 'yandex.cloud.iam.v1.ListServiceAccountsRequest' as const,

    encode(
        message: ListServiceAccountsRequest,
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
    ): ListServiceAccountsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListServiceAccountsRequest,
        } as ListServiceAccountsRequest;
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

    fromJSON(object: any): ListServiceAccountsRequest {
        const message = {
            ...baseListServiceAccountsRequest,
        } as ListServiceAccountsRequest;
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

    toJSON(message: ListServiceAccountsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListServiceAccountsRequest>
    ): ListServiceAccountsRequest {
        const message = {
            ...baseListServiceAccountsRequest,
        } as ListServiceAccountsRequest;
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

messageTypeRegistry.set(
    ListServiceAccountsRequest.$type,
    ListServiceAccountsRequest
);

const baseListServiceAccountsResponse: object = {
    $type: 'yandex.cloud.iam.v1.ListServiceAccountsResponse',
    nextPageToken: '',
};

export const ListServiceAccountsResponse = {
    $type: 'yandex.cloud.iam.v1.ListServiceAccountsResponse' as const,

    encode(
        message: ListServiceAccountsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.serviceAccounts) {
            ServiceAccount.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListServiceAccountsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListServiceAccountsResponse,
        } as ListServiceAccountsResponse;
        message.serviceAccounts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccounts.push(
                        ServiceAccount.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListServiceAccountsResponse {
        const message = {
            ...baseListServiceAccountsResponse,
        } as ListServiceAccountsResponse;
        message.serviceAccounts = [];
        if (
            object.serviceAccounts !== undefined &&
            object.serviceAccounts !== null
        ) {
            for (const e of object.serviceAccounts) {
                message.serviceAccounts.push(ServiceAccount.fromJSON(e));
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

    toJSON(message: ListServiceAccountsResponse): unknown {
        const obj: any = {};
        if (message.serviceAccounts) {
            obj.serviceAccounts = message.serviceAccounts.map((e) =>
                e ? ServiceAccount.toJSON(e) : undefined
            );
        } else {
            obj.serviceAccounts = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListServiceAccountsResponse>
    ): ListServiceAccountsResponse {
        const message = {
            ...baseListServiceAccountsResponse,
        } as ListServiceAccountsResponse;
        message.serviceAccounts = [];
        if (
            object.serviceAccounts !== undefined &&
            object.serviceAccounts !== null
        ) {
            for (const e of object.serviceAccounts) {
                message.serviceAccounts.push(ServiceAccount.fromPartial(e));
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

messageTypeRegistry.set(
    ListServiceAccountsResponse.$type,
    ListServiceAccountsResponse
);

const baseCreateServiceAccountRequest: object = {
    $type: 'yandex.cloud.iam.v1.CreateServiceAccountRequest',
    folderId: '',
    name: '',
    description: '',
};

export const CreateServiceAccountRequest = {
    $type: 'yandex.cloud.iam.v1.CreateServiceAccountRequest' as const,

    encode(
        message: CreateServiceAccountRequest,
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
            CreateServiceAccountRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.iam.v1.CreateServiceAccountRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(34).fork()
            ).ldelim();
        });
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateServiceAccountRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateServiceAccountRequest,
        } as CreateServiceAccountRequest;
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
                    const entry4 =
                        CreateServiceAccountRequest_LabelsEntry.decode(
                            reader,
                            reader.uint32()
                        );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateServiceAccountRequest {
        const message = {
            ...baseCreateServiceAccountRequest,
        } as CreateServiceAccountRequest;
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
        return message;
    },

    toJSON(message: CreateServiceAccountRequest): unknown {
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
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateServiceAccountRequest>
    ): CreateServiceAccountRequest {
        const message = {
            ...baseCreateServiceAccountRequest,
        } as CreateServiceAccountRequest;
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
        return message;
    },
};

messageTypeRegistry.set(
    CreateServiceAccountRequest.$type,
    CreateServiceAccountRequest
);

const baseCreateServiceAccountRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.iam.v1.CreateServiceAccountRequest.LabelsEntry',
    key: '',
    value: '',
};

export const CreateServiceAccountRequest_LabelsEntry = {
    $type: 'yandex.cloud.iam.v1.CreateServiceAccountRequest.LabelsEntry' as const,

    encode(
        message: CreateServiceAccountRequest_LabelsEntry,
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
    ): CreateServiceAccountRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateServiceAccountRequest_LabelsEntry,
        } as CreateServiceAccountRequest_LabelsEntry;
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

    fromJSON(object: any): CreateServiceAccountRequest_LabelsEntry {
        const message = {
            ...baseCreateServiceAccountRequest_LabelsEntry,
        } as CreateServiceAccountRequest_LabelsEntry;
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

    toJSON(message: CreateServiceAccountRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateServiceAccountRequest_LabelsEntry>
    ): CreateServiceAccountRequest_LabelsEntry {
        const message = {
            ...baseCreateServiceAccountRequest_LabelsEntry,
        } as CreateServiceAccountRequest_LabelsEntry;
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

messageTypeRegistry.set(
    CreateServiceAccountRequest_LabelsEntry.$type,
    CreateServiceAccountRequest_LabelsEntry
);

const baseCreateServiceAccountMetadata: object = {
    $type: 'yandex.cloud.iam.v1.CreateServiceAccountMetadata',
    serviceAccountId: '',
};

export const CreateServiceAccountMetadata = {
    $type: 'yandex.cloud.iam.v1.CreateServiceAccountMetadata' as const,

    encode(
        message: CreateServiceAccountMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateServiceAccountMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateServiceAccountMetadata,
        } as CreateServiceAccountMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateServiceAccountMetadata {
        const message = {
            ...baseCreateServiceAccountMetadata,
        } as CreateServiceAccountMetadata;
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
        }
        return message;
    },

    toJSON(message: CreateServiceAccountMetadata): unknown {
        const obj: any = {};
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateServiceAccountMetadata>
    ): CreateServiceAccountMetadata {
        const message = {
            ...baseCreateServiceAccountMetadata,
        } as CreateServiceAccountMetadata;
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    CreateServiceAccountMetadata.$type,
    CreateServiceAccountMetadata
);

const baseUpdateServiceAccountRequest: object = {
    $type: 'yandex.cloud.iam.v1.UpdateServiceAccountRequest',
    serviceAccountId: '',
    name: '',
    description: '',
};

export const UpdateServiceAccountRequest = {
    $type: 'yandex.cloud.iam.v1.UpdateServiceAccountRequest' as const,

    encode(
        message: UpdateServiceAccountRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
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
            UpdateServiceAccountRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.iam.v1.UpdateServiceAccountRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(42).fork()
            ).ldelim();
        });
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateServiceAccountRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateServiceAccountRequest,
        } as UpdateServiceAccountRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
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
                    const entry5 =
                        UpdateServiceAccountRequest_LabelsEntry.decode(
                            reader,
                            reader.uint32()
                        );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateServiceAccountRequest {
        const message = {
            ...baseUpdateServiceAccountRequest,
        } as UpdateServiceAccountRequest;
        message.labels = {};
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
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
        return message;
    },

    toJSON(message: UpdateServiceAccountRequest): unknown {
        const obj: any = {};
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
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
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateServiceAccountRequest>
    ): UpdateServiceAccountRequest {
        const message = {
            ...baseUpdateServiceAccountRequest,
        } as UpdateServiceAccountRequest;
        message.labels = {};
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
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
        return message;
    },
};

messageTypeRegistry.set(
    UpdateServiceAccountRequest.$type,
    UpdateServiceAccountRequest
);

const baseUpdateServiceAccountRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.iam.v1.UpdateServiceAccountRequest.LabelsEntry',
    key: '',
    value: '',
};

export const UpdateServiceAccountRequest_LabelsEntry = {
    $type: 'yandex.cloud.iam.v1.UpdateServiceAccountRequest.LabelsEntry' as const,

    encode(
        message: UpdateServiceAccountRequest_LabelsEntry,
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
    ): UpdateServiceAccountRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateServiceAccountRequest_LabelsEntry,
        } as UpdateServiceAccountRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateServiceAccountRequest_LabelsEntry {
        const message = {
            ...baseUpdateServiceAccountRequest_LabelsEntry,
        } as UpdateServiceAccountRequest_LabelsEntry;
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

    toJSON(message: UpdateServiceAccountRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateServiceAccountRequest_LabelsEntry>
    ): UpdateServiceAccountRequest_LabelsEntry {
        const message = {
            ...baseUpdateServiceAccountRequest_LabelsEntry,
        } as UpdateServiceAccountRequest_LabelsEntry;
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

messageTypeRegistry.set(
    UpdateServiceAccountRequest_LabelsEntry.$type,
    UpdateServiceAccountRequest_LabelsEntry
);

const baseUpdateServiceAccountMetadata: object = {
    $type: 'yandex.cloud.iam.v1.UpdateServiceAccountMetadata',
    serviceAccountId: '',
};

export const UpdateServiceAccountMetadata = {
    $type: 'yandex.cloud.iam.v1.UpdateServiceAccountMetadata' as const,

    encode(
        message: UpdateServiceAccountMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateServiceAccountMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateServiceAccountMetadata,
        } as UpdateServiceAccountMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateServiceAccountMetadata {
        const message = {
            ...baseUpdateServiceAccountMetadata,
        } as UpdateServiceAccountMetadata;
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
        }
        return message;
    },

    toJSON(message: UpdateServiceAccountMetadata): unknown {
        const obj: any = {};
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateServiceAccountMetadata>
    ): UpdateServiceAccountMetadata {
        const message = {
            ...baseUpdateServiceAccountMetadata,
        } as UpdateServiceAccountMetadata;
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    UpdateServiceAccountMetadata.$type,
    UpdateServiceAccountMetadata
);

const baseDeleteServiceAccountRequest: object = {
    $type: 'yandex.cloud.iam.v1.DeleteServiceAccountRequest',
    serviceAccountId: '',
};

export const DeleteServiceAccountRequest = {
    $type: 'yandex.cloud.iam.v1.DeleteServiceAccountRequest' as const,

    encode(
        message: DeleteServiceAccountRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteServiceAccountRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteServiceAccountRequest,
        } as DeleteServiceAccountRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteServiceAccountRequest {
        const message = {
            ...baseDeleteServiceAccountRequest,
        } as DeleteServiceAccountRequest;
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
        }
        return message;
    },

    toJSON(message: DeleteServiceAccountRequest): unknown {
        const obj: any = {};
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteServiceAccountRequest>
    ): DeleteServiceAccountRequest {
        const message = {
            ...baseDeleteServiceAccountRequest,
        } as DeleteServiceAccountRequest;
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    DeleteServiceAccountRequest.$type,
    DeleteServiceAccountRequest
);

const baseDeleteServiceAccountMetadata: object = {
    $type: 'yandex.cloud.iam.v1.DeleteServiceAccountMetadata',
    serviceAccountId: '',
};

export const DeleteServiceAccountMetadata = {
    $type: 'yandex.cloud.iam.v1.DeleteServiceAccountMetadata' as const,

    encode(
        message: DeleteServiceAccountMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteServiceAccountMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteServiceAccountMetadata,
        } as DeleteServiceAccountMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteServiceAccountMetadata {
        const message = {
            ...baseDeleteServiceAccountMetadata,
        } as DeleteServiceAccountMetadata;
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = String(object.serviceAccountId);
        } else {
            message.serviceAccountId = '';
        }
        return message;
    },

    toJSON(message: DeleteServiceAccountMetadata): unknown {
        const obj: any = {};
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteServiceAccountMetadata>
    ): DeleteServiceAccountMetadata {
        const message = {
            ...baseDeleteServiceAccountMetadata,
        } as DeleteServiceAccountMetadata;
        if (
            object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null
        ) {
            message.serviceAccountId = object.serviceAccountId;
        } else {
            message.serviceAccountId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    DeleteServiceAccountMetadata.$type,
    DeleteServiceAccountMetadata
);

const baseListServiceAccountOperationsRequest: object = {
    $type: 'yandex.cloud.iam.v1.ListServiceAccountOperationsRequest',
    serviceAccountId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListServiceAccountOperationsRequest = {
    $type: 'yandex.cloud.iam.v1.ListServiceAccountOperationsRequest' as const,

    encode(
        message: ListServiceAccountOperationsRequest,
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
    ): ListServiceAccountOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListServiceAccountOperationsRequest,
        } as ListServiceAccountOperationsRequest;
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

    fromJSON(object: any): ListServiceAccountOperationsRequest {
        const message = {
            ...baseListServiceAccountOperationsRequest,
        } as ListServiceAccountOperationsRequest;
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

    toJSON(message: ListServiceAccountOperationsRequest): unknown {
        const obj: any = {};
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListServiceAccountOperationsRequest>
    ): ListServiceAccountOperationsRequest {
        const message = {
            ...baseListServiceAccountOperationsRequest,
        } as ListServiceAccountOperationsRequest;
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

messageTypeRegistry.set(
    ListServiceAccountOperationsRequest.$type,
    ListServiceAccountOperationsRequest
);

const baseListServiceAccountOperationsResponse: object = {
    $type: 'yandex.cloud.iam.v1.ListServiceAccountOperationsResponse',
    nextPageToken: '',
};

export const ListServiceAccountOperationsResponse = {
    $type: 'yandex.cloud.iam.v1.ListServiceAccountOperationsResponse' as const,

    encode(
        message: ListServiceAccountOperationsResponse,
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
    ): ListServiceAccountOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListServiceAccountOperationsResponse,
        } as ListServiceAccountOperationsResponse;
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

    fromJSON(object: any): ListServiceAccountOperationsResponse {
        const message = {
            ...baseListServiceAccountOperationsResponse,
        } as ListServiceAccountOperationsResponse;
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

    toJSON(message: ListServiceAccountOperationsResponse): unknown {
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
        object: DeepPartial<ListServiceAccountOperationsResponse>
    ): ListServiceAccountOperationsResponse {
        const message = {
            ...baseListServiceAccountOperationsResponse,
        } as ListServiceAccountOperationsResponse;
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

messageTypeRegistry.set(
    ListServiceAccountOperationsResponse.$type,
    ListServiceAccountOperationsResponse
);

/** A set of methods for managing ServiceAccount resources. */
export const ServiceAccountServiceService = {
    /**
     * Returns the specified ServiceAccount resource.
     *
     * To get the list of available ServiceAccount resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.iam.v1.ServiceAccountService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetServiceAccountRequest) =>
            Buffer.from(GetServiceAccountRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetServiceAccountRequest.decode(value),
        responseSerialize: (value: ServiceAccount) =>
            Buffer.from(ServiceAccount.encode(value).finish()),
        responseDeserialize: (value: Buffer) => ServiceAccount.decode(value),
    },
    /** Retrieves the list of ServiceAccount resources in the specified folder. */
    list: {
        path: '/yandex.cloud.iam.v1.ServiceAccountService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListServiceAccountsRequest) =>
            Buffer.from(ListServiceAccountsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListServiceAccountsRequest.decode(value),
        responseSerialize: (value: ListServiceAccountsResponse) =>
            Buffer.from(ListServiceAccountsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListServiceAccountsResponse.decode(value),
    },
    /** Creates a service account in the specified folder. */
    create: {
        path: '/yandex.cloud.iam.v1.ServiceAccountService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateServiceAccountRequest) =>
            Buffer.from(CreateServiceAccountRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateServiceAccountRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified service account. */
    update: {
        path: '/yandex.cloud.iam.v1.ServiceAccountService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateServiceAccountRequest) =>
            Buffer.from(UpdateServiceAccountRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateServiceAccountRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified service account. */
    delete: {
        path: '/yandex.cloud.iam.v1.ServiceAccountService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteServiceAccountRequest) =>
            Buffer.from(DeleteServiceAccountRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteServiceAccountRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists access bindings for the specified service account. */
    listAccessBindings: {
        path: '/yandex.cloud.iam.v1.ServiceAccountService/ListAccessBindings',
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
    /** Sets access bindings for the service account. */
    setAccessBindings: {
        path: '/yandex.cloud.iam.v1.ServiceAccountService/SetAccessBindings',
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
    /** Updates access bindings for the specified service account. */
    updateAccessBindings: {
        path: '/yandex.cloud.iam.v1.ServiceAccountService/UpdateAccessBindings',
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
    /** Lists operations for the specified service account. */
    listOperations: {
        path: '/yandex.cloud.iam.v1.ServiceAccountService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListServiceAccountOperationsRequest) =>
            Buffer.from(
                ListServiceAccountOperationsRequest.encode(value).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            ListServiceAccountOperationsRequest.decode(value),
        responseSerialize: (value: ListServiceAccountOperationsResponse) =>
            Buffer.from(
                ListServiceAccountOperationsResponse.encode(value).finish()
            ),
        responseDeserialize: (value: Buffer) =>
            ListServiceAccountOperationsResponse.decode(value),
    },
} as const;

export interface ServiceAccountServiceServer
    extends UntypedServiceImplementation {
    /**
     * Returns the specified ServiceAccount resource.
     *
     * To get the list of available ServiceAccount resources, make a [List] request.
     */
    get: handleUnaryCall<GetServiceAccountRequest, ServiceAccount>;
    /** Retrieves the list of ServiceAccount resources in the specified folder. */
    list: handleUnaryCall<
        ListServiceAccountsRequest,
        ListServiceAccountsResponse
    >;
    /** Creates a service account in the specified folder. */
    create: handleUnaryCall<CreateServiceAccountRequest, Operation>;
    /** Updates the specified service account. */
    update: handleUnaryCall<UpdateServiceAccountRequest, Operation>;
    /** Deletes the specified service account. */
    delete: handleUnaryCall<DeleteServiceAccountRequest, Operation>;
    /** Lists access bindings for the specified service account. */
    listAccessBindings: handleUnaryCall<
        ListAccessBindingsRequest,
        ListAccessBindingsResponse
    >;
    /** Sets access bindings for the service account. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified service account. */
    updateAccessBindings: handleUnaryCall<
        UpdateAccessBindingsRequest,
        Operation
    >;
    /** Lists operations for the specified service account. */
    listOperations: handleUnaryCall<
        ListServiceAccountOperationsRequest,
        ListServiceAccountOperationsResponse
    >;
}

export interface ServiceAccountServiceClient extends Client {
    /**
     * Returns the specified ServiceAccount resource.
     *
     * To get the list of available ServiceAccount resources, make a [List] request.
     */
    get(
        request: GetServiceAccountRequest,
        callback: (error: ServiceError | null, response: ServiceAccount) => void
    ): ClientUnaryCall;
    get(
        request: GetServiceAccountRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: ServiceAccount) => void
    ): ClientUnaryCall;
    get(
        request: GetServiceAccountRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: ServiceAccount) => void
    ): ClientUnaryCall;
    /** Retrieves the list of ServiceAccount resources in the specified folder. */
    list(
        request: ListServiceAccountsRequest,
        callback: (
            error: ServiceError | null,
            response: ListServiceAccountsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListServiceAccountsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListServiceAccountsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListServiceAccountsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListServiceAccountsResponse
        ) => void
    ): ClientUnaryCall;
    /** Creates a service account in the specified folder. */
    create(
        request: CreateServiceAccountRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateServiceAccountRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateServiceAccountRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates the specified service account. */
    update(
        request: UpdateServiceAccountRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateServiceAccountRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateServiceAccountRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified service account. */
    delete(
        request: DeleteServiceAccountRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteServiceAccountRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteServiceAccountRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Lists access bindings for the specified service account. */
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
    /** Sets access bindings for the service account. */
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
    /** Updates access bindings for the specified service account. */
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
    /** Lists operations for the specified service account. */
    listOperations(
        request: ListServiceAccountOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListServiceAccountOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListServiceAccountOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListServiceAccountOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListServiceAccountOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListServiceAccountOperationsResponse
        ) => void
    ): ClientUnaryCall;
}

export const ServiceAccountServiceClient = makeGenericClientConstructor(
    ServiceAccountServiceService,
    'yandex.cloud.iam.v1.ServiceAccountService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): ServiceAccountServiceClient;
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
