/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { messageTypeRegistry } from '../../../../typeRegistry';
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    SetAccessBindingsRequest,
    UpdateAccessBindingsRequest,
} from '../../../../yandex/cloud/access/access';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { Organization } from '../../../../yandex/cloud/organizationmanager/v1/organization';
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

export const protobufPackage = 'yandex.cloud.organizationmanager.v1';

export interface GetOrganizationRequest {
    $type: 'yandex.cloud.organizationmanager.v1.GetOrganizationRequest';
    /**
     * ID of the Organization resource to return.
     * To get the organization ID, use a [OrganizationService.List] request.
     */
    organizationId: string;
}

export interface ListOrganizationsRequest {
    $type: 'yandex.cloud.organizationmanager.v1.ListOrganizationsRequest';
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListOrganizationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListOrganizationsResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [Organization.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     */
    filter: string;
}

export interface ListOrganizationsResponse {
    $type: 'yandex.cloud.organizationmanager.v1.ListOrganizationsResponse';
    /** List of Organization resources. */
    organizations: Organization[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListOrganizationsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListOrganizationsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface UpdateOrganizationRequest {
    $type: 'yandex.cloud.organizationmanager.v1.UpdateOrganizationRequest';
    /**
     * ID of the organization to update.
     * To get the organization ID, use a [OrganizationService.List] request.
     */
    organizationId: string;
    /** Field mask that specifies which fields of the organization are going to be updated. */
    updateMask: FieldMask | undefined;
    /** Name of the organization. */
    name: string;
    /** Description of the organization. */
    description: string;
    /** Display name of the organization. */
    title: string;
    /** Resource labels as `` key:value `` pairs. */
    labels: { [key: string]: string };
}

export interface UpdateOrganizationRequest_LabelsEntry {
    $type: 'yandex.cloud.organizationmanager.v1.UpdateOrganizationRequest.LabelsEntry';
    key: string;
    value: string;
}

export interface UpdateOrganizationMetadata {
    $type: 'yandex.cloud.organizationmanager.v1.UpdateOrganizationMetadata';
    /** ID of the organization that is being updated. */
    organizationId: string;
}

export interface ListOrganizationOperationsRequest {
    $type: 'yandex.cloud.organizationmanager.v1.ListOrganizationOperationsRequest';
    /** ID of the Organization resource to list operations for. */
    organizationId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListOrganizationOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListOrganizationOperationsResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
}

export interface ListOrganizationOperationsResponse {
    $type: 'yandex.cloud.organizationmanager.v1.ListOrganizationOperationsResponse';
    /** List of operations for the specified organization. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListOrganizationOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListOrganizationOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

const baseGetOrganizationRequest: object = {
    $type: 'yandex.cloud.organizationmanager.v1.GetOrganizationRequest',
    organizationId: '',
};

export const GetOrganizationRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.GetOrganizationRequest' as const,

    encode(
        message: GetOrganizationRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetOrganizationRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetOrganizationRequest,
        } as GetOrganizationRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetOrganizationRequest {
        const message = {
            ...baseGetOrganizationRequest,
        } as GetOrganizationRequest;
        if (
            object.organizationId !== undefined &&
            object.organizationId !== null
        ) {
            message.organizationId = String(object.organizationId);
        } else {
            message.organizationId = '';
        }
        return message;
    },

    toJSON(message: GetOrganizationRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetOrganizationRequest>
    ): GetOrganizationRequest {
        const message = {
            ...baseGetOrganizationRequest,
        } as GetOrganizationRequest;
        if (
            object.organizationId !== undefined &&
            object.organizationId !== null
        ) {
            message.organizationId = object.organizationId;
        } else {
            message.organizationId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(GetOrganizationRequest.$type, GetOrganizationRequest);

const baseListOrganizationsRequest: object = {
    $type: 'yandex.cloud.organizationmanager.v1.ListOrganizationsRequest',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListOrganizationsRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.ListOrganizationsRequest' as const,

    encode(
        message: ListOrganizationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.pageSize !== 0) {
            writer.uint32(8).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(18).string(message.pageToken);
        }
        if (message.filter !== '') {
            writer.uint32(26).string(message.filter);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListOrganizationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListOrganizationsRequest,
        } as ListOrganizationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pageSize = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.pageToken = reader.string();
                    break;
                case 3:
                    message.filter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ListOrganizationsRequest {
        const message = {
            ...baseListOrganizationsRequest,
        } as ListOrganizationsRequest;
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

    toJSON(message: ListOrganizationsRequest): unknown {
        const obj: any = {};
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListOrganizationsRequest>
    ): ListOrganizationsRequest {
        const message = {
            ...baseListOrganizationsRequest,
        } as ListOrganizationsRequest;
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
    ListOrganizationsRequest.$type,
    ListOrganizationsRequest
);

const baseListOrganizationsResponse: object = {
    $type: 'yandex.cloud.organizationmanager.v1.ListOrganizationsResponse',
    nextPageToken: '',
};

export const ListOrganizationsResponse = {
    $type: 'yandex.cloud.organizationmanager.v1.ListOrganizationsResponse' as const,

    encode(
        message: ListOrganizationsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.organizations) {
            Organization.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListOrganizationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListOrganizationsResponse,
        } as ListOrganizationsResponse;
        message.organizations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizations.push(
                        Organization.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListOrganizationsResponse {
        const message = {
            ...baseListOrganizationsResponse,
        } as ListOrganizationsResponse;
        message.organizations = [];
        if (
            object.organizations !== undefined &&
            object.organizations !== null
        ) {
            for (const e of object.organizations) {
                message.organizations.push(Organization.fromJSON(e));
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

    toJSON(message: ListOrganizationsResponse): unknown {
        const obj: any = {};
        if (message.organizations) {
            obj.organizations = message.organizations.map((e) =>
                e ? Organization.toJSON(e) : undefined
            );
        } else {
            obj.organizations = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListOrganizationsResponse>
    ): ListOrganizationsResponse {
        const message = {
            ...baseListOrganizationsResponse,
        } as ListOrganizationsResponse;
        message.organizations = [];
        if (
            object.organizations !== undefined &&
            object.organizations !== null
        ) {
            for (const e of object.organizations) {
                message.organizations.push(Organization.fromPartial(e));
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
    ListOrganizationsResponse.$type,
    ListOrganizationsResponse
);

const baseUpdateOrganizationRequest: object = {
    $type: 'yandex.cloud.organizationmanager.v1.UpdateOrganizationRequest',
    organizationId: '',
    name: '',
    description: '',
    title: '',
};

export const UpdateOrganizationRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.UpdateOrganizationRequest' as const,

    encode(
        message: UpdateOrganizationRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
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
        if (message.title !== '') {
            writer.uint32(42).string(message.title);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            UpdateOrganizationRequest_LabelsEntry.encode(
                {
                    $type: 'yandex.cloud.organizationmanager.v1.UpdateOrganizationRequest.LabelsEntry',
                    key: key as any,
                    value,
                },
                writer.uint32(50).fork()
            ).ldelim();
        });
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateOrganizationRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateOrganizationRequest,
        } as UpdateOrganizationRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
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
                    message.title = reader.string();
                    break;
                case 6:
                    const entry6 = UpdateOrganizationRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry6.value !== undefined) {
                        message.labels[entry6.key] = entry6.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateOrganizationRequest {
        const message = {
            ...baseUpdateOrganizationRequest,
        } as UpdateOrganizationRequest;
        message.labels = {};
        if (
            object.organizationId !== undefined &&
            object.organizationId !== null
        ) {
            message.organizationId = String(object.organizationId);
        } else {
            message.organizationId = '';
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
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        } else {
            message.title = '';
        }
        if (object.labels !== undefined && object.labels !== null) {
            Object.entries(object.labels).forEach(([key, value]) => {
                message.labels[key] = String(value);
            });
        }
        return message;
    },

    toJSON(message: UpdateOrganizationRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.title !== undefined && (obj.title = message.title);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateOrganizationRequest>
    ): UpdateOrganizationRequest {
        const message = {
            ...baseUpdateOrganizationRequest,
        } as UpdateOrganizationRequest;
        message.labels = {};
        if (
            object.organizationId !== undefined &&
            object.organizationId !== null
        ) {
            message.organizationId = object.organizationId;
        } else {
            message.organizationId = '';
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
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        } else {
            message.title = '';
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
    UpdateOrganizationRequest.$type,
    UpdateOrganizationRequest
);

const baseUpdateOrganizationRequest_LabelsEntry: object = {
    $type: 'yandex.cloud.organizationmanager.v1.UpdateOrganizationRequest.LabelsEntry',
    key: '',
    value: '',
};

export const UpdateOrganizationRequest_LabelsEntry = {
    $type: 'yandex.cloud.organizationmanager.v1.UpdateOrganizationRequest.LabelsEntry' as const,

    encode(
        message: UpdateOrganizationRequest_LabelsEntry,
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
    ): UpdateOrganizationRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateOrganizationRequest_LabelsEntry,
        } as UpdateOrganizationRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateOrganizationRequest_LabelsEntry {
        const message = {
            ...baseUpdateOrganizationRequest_LabelsEntry,
        } as UpdateOrganizationRequest_LabelsEntry;
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

    toJSON(message: UpdateOrganizationRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateOrganizationRequest_LabelsEntry>
    ): UpdateOrganizationRequest_LabelsEntry {
        const message = {
            ...baseUpdateOrganizationRequest_LabelsEntry,
        } as UpdateOrganizationRequest_LabelsEntry;
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
    UpdateOrganizationRequest_LabelsEntry.$type,
    UpdateOrganizationRequest_LabelsEntry
);

const baseUpdateOrganizationMetadata: object = {
    $type: 'yandex.cloud.organizationmanager.v1.UpdateOrganizationMetadata',
    organizationId: '',
};

export const UpdateOrganizationMetadata = {
    $type: 'yandex.cloud.organizationmanager.v1.UpdateOrganizationMetadata' as const,

    encode(
        message: UpdateOrganizationMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateOrganizationMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateOrganizationMetadata,
        } as UpdateOrganizationMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateOrganizationMetadata {
        const message = {
            ...baseUpdateOrganizationMetadata,
        } as UpdateOrganizationMetadata;
        if (
            object.organizationId !== undefined &&
            object.organizationId !== null
        ) {
            message.organizationId = String(object.organizationId);
        } else {
            message.organizationId = '';
        }
        return message;
    },

    toJSON(message: UpdateOrganizationMetadata): unknown {
        const obj: any = {};
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateOrganizationMetadata>
    ): UpdateOrganizationMetadata {
        const message = {
            ...baseUpdateOrganizationMetadata,
        } as UpdateOrganizationMetadata;
        if (
            object.organizationId !== undefined &&
            object.organizationId !== null
        ) {
            message.organizationId = object.organizationId;
        } else {
            message.organizationId = '';
        }
        return message;
    },
};

messageTypeRegistry.set(
    UpdateOrganizationMetadata.$type,
    UpdateOrganizationMetadata
);

const baseListOrganizationOperationsRequest: object = {
    $type: 'yandex.cloud.organizationmanager.v1.ListOrganizationOperationsRequest',
    organizationId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListOrganizationOperationsRequest = {
    $type: 'yandex.cloud.organizationmanager.v1.ListOrganizationOperationsRequest' as const,

    encode(
        message: ListOrganizationOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.organizationId !== '') {
            writer.uint32(10).string(message.organizationId);
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
    ): ListOrganizationOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListOrganizationOperationsRequest,
        } as ListOrganizationOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
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

    fromJSON(object: any): ListOrganizationOperationsRequest {
        const message = {
            ...baseListOrganizationOperationsRequest,
        } as ListOrganizationOperationsRequest;
        if (
            object.organizationId !== undefined &&
            object.organizationId !== null
        ) {
            message.organizationId = String(object.organizationId);
        } else {
            message.organizationId = '';
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

    toJSON(message: ListOrganizationOperationsRequest): unknown {
        const obj: any = {};
        message.organizationId !== undefined &&
            (obj.organizationId = message.organizationId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListOrganizationOperationsRequest>
    ): ListOrganizationOperationsRequest {
        const message = {
            ...baseListOrganizationOperationsRequest,
        } as ListOrganizationOperationsRequest;
        if (
            object.organizationId !== undefined &&
            object.organizationId !== null
        ) {
            message.organizationId = object.organizationId;
        } else {
            message.organizationId = '';
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
    ListOrganizationOperationsRequest.$type,
    ListOrganizationOperationsRequest
);

const baseListOrganizationOperationsResponse: object = {
    $type: 'yandex.cloud.organizationmanager.v1.ListOrganizationOperationsResponse',
    nextPageToken: '',
};

export const ListOrganizationOperationsResponse = {
    $type: 'yandex.cloud.organizationmanager.v1.ListOrganizationOperationsResponse' as const,

    encode(
        message: ListOrganizationOperationsResponse,
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
    ): ListOrganizationOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListOrganizationOperationsResponse,
        } as ListOrganizationOperationsResponse;
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

    fromJSON(object: any): ListOrganizationOperationsResponse {
        const message = {
            ...baseListOrganizationOperationsResponse,
        } as ListOrganizationOperationsResponse;
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

    toJSON(message: ListOrganizationOperationsResponse): unknown {
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
        object: DeepPartial<ListOrganizationOperationsResponse>
    ): ListOrganizationOperationsResponse {
        const message = {
            ...baseListOrganizationOperationsResponse,
        } as ListOrganizationOperationsResponse;
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
    ListOrganizationOperationsResponse.$type,
    ListOrganizationOperationsResponse
);

/** A set of methods for managing Organization resources. */
export const OrganizationServiceService = {
    /**
     * Returns the specified Organization resource.
     *
     * To get the list of available Organization resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.organizationmanager.v1.OrganizationService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetOrganizationRequest) =>
            Buffer.from(GetOrganizationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetOrganizationRequest.decode(value),
        responseSerialize: (value: Organization) =>
            Buffer.from(Organization.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Organization.decode(value),
    },
    /** Retrieves the list of Organization resources. */
    list: {
        path: '/yandex.cloud.organizationmanager.v1.OrganizationService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListOrganizationsRequest) =>
            Buffer.from(ListOrganizationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListOrganizationsRequest.decode(value),
        responseSerialize: (value: ListOrganizationsResponse) =>
            Buffer.from(ListOrganizationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListOrganizationsResponse.decode(value),
    },
    /** Updates the specified organization. */
    update: {
        path: '/yandex.cloud.organizationmanager.v1.OrganizationService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateOrganizationRequest) =>
            Buffer.from(UpdateOrganizationRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateOrganizationRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists operations for the specified organization. */
    listOperations: {
        path: '/yandex.cloud.organizationmanager.v1.OrganizationService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListOrganizationOperationsRequest) =>
            Buffer.from(
                ListOrganizationOperationsRequest.encode(value).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            ListOrganizationOperationsRequest.decode(value),
        responseSerialize: (value: ListOrganizationOperationsResponse) =>
            Buffer.from(
                ListOrganizationOperationsResponse.encode(value).finish()
            ),
        responseDeserialize: (value: Buffer) =>
            ListOrganizationOperationsResponse.decode(value),
    },
    /** Lists access bindings for the specified organization. */
    listAccessBindings: {
        path: '/yandex.cloud.organizationmanager.v1.OrganizationService/ListAccessBindings',
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
    /** Sets access bindings for the specified organization. */
    setAccessBindings: {
        path: '/yandex.cloud.organizationmanager.v1.OrganizationService/SetAccessBindings',
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
    /** Updates access bindings for the specified organization. */
    updateAccessBindings: {
        path: '/yandex.cloud.organizationmanager.v1.OrganizationService/UpdateAccessBindings',
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

export interface OrganizationServiceServer
    extends UntypedServiceImplementation {
    /**
     * Returns the specified Organization resource.
     *
     * To get the list of available Organization resources, make a [List] request.
     */
    get: handleUnaryCall<GetOrganizationRequest, Organization>;
    /** Retrieves the list of Organization resources. */
    list: handleUnaryCall<ListOrganizationsRequest, ListOrganizationsResponse>;
    /** Updates the specified organization. */
    update: handleUnaryCall<UpdateOrganizationRequest, Operation>;
    /** Lists operations for the specified organization. */
    listOperations: handleUnaryCall<
        ListOrganizationOperationsRequest,
        ListOrganizationOperationsResponse
    >;
    /** Lists access bindings for the specified organization. */
    listAccessBindings: handleUnaryCall<
        ListAccessBindingsRequest,
        ListAccessBindingsResponse
    >;
    /** Sets access bindings for the specified organization. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified organization. */
    updateAccessBindings: handleUnaryCall<
        UpdateAccessBindingsRequest,
        Operation
    >;
}

export interface OrganizationServiceClient extends Client {
    /**
     * Returns the specified Organization resource.
     *
     * To get the list of available Organization resources, make a [List] request.
     */
    get(
        request: GetOrganizationRequest,
        callback: (error: ServiceError | null, response: Organization) => void
    ): ClientUnaryCall;
    get(
        request: GetOrganizationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Organization) => void
    ): ClientUnaryCall;
    get(
        request: GetOrganizationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Organization) => void
    ): ClientUnaryCall;
    /** Retrieves the list of Organization resources. */
    list(
        request: ListOrganizationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListOrganizationsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListOrganizationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListOrganizationsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListOrganizationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListOrganizationsResponse
        ) => void
    ): ClientUnaryCall;
    /** Updates the specified organization. */
    update(
        request: UpdateOrganizationRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateOrganizationRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateOrganizationRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Lists operations for the specified organization. */
    listOperations(
        request: ListOrganizationOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListOrganizationOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListOrganizationOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListOrganizationOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListOrganizationOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListOrganizationOperationsResponse
        ) => void
    ): ClientUnaryCall;
    /** Lists access bindings for the specified organization. */
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
    /** Sets access bindings for the specified organization. */
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
    /** Updates access bindings for the specified organization. */
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

export const OrganizationServiceClient = makeGenericClientConstructor(
    OrganizationServiceService,
    'yandex.cloud.organizationmanager.v1.OrganizationService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): OrganizationServiceClient;
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
