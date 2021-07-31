/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { Network } from '../../../../yandex/cloud/vpc/v1/network';
import { Subnet } from '../../../../yandex/cloud/vpc/v1/subnet';
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

export const protobufPackage = 'yandex.cloud.vpc.v1';

export interface GetNetworkRequest {
    /**
     * ID of the Network resource to return.
     * To get the network ID, use a [NetworkService.List] request.
     */
    networkId: string;
}

export interface ListNetworksRequest {
    /**
     * ID of the folder to list networks in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListNetworksResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListNetworksResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [Network.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     */
    filter: string;
}

export interface ListNetworksResponse {
    /** List of Network resources. */
    networks: Network[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListNetworksRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListNetworksRequest.page_token] query parameter
     * in the next list request. Subsequent list requests will have their own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateNetworkRequest {
    /**
     * ID of the folder for this request to create a network in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the network.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the network. */
    description: string;
    /** Resource labels as `` key:value `` pairs. */
    labels: { [key: string]: string };
}

export interface CreateNetworkRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateNetworkMetadata {
    /** ID of the Network that is being created. */
    networkId: string;
}

export interface UpdateNetworkRequest {
    /**
     * ID of the Network resource to update.
     * To get the network ID use a [NetworkService.List] request.
     */
    networkId: string;
    /** Field mask that specifies which fields of the Network resource are going to be updated. */
    updateMask: FieldMask | undefined;
    /**
     * Name of the network.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the network. */
    description: string;
    /** Resource labels as `` key:value `` pairs. */
    labels: { [key: string]: string };
}

export interface UpdateNetworkRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateNetworkMetadata {
    /** ID of the Network resource that is being updated. */
    networkId: string;
}

export interface DeleteNetworkRequest {
    /**
     * ID of the Network resource to update.
     * To get the network ID, use a [NetworkService.List] request.
     */
    networkId: string;
}

export interface DeleteNetworkMetadata {
    /** ID of the network that is being deleted. */
    networkId: string;
}

export interface ListNetworkSubnetsRequest {
    /** ID of the Network resource to list subnets for. */
    networkId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListNetworkSubnetsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListNetworkSubnetsResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
}

export interface ListNetworkSubnetsResponse {
    /** List of subnets that belong to the network which is specified in the request. */
    subnets: Subnet[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListNetworkSubnetsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListNetworkSubnetsRequest.page_token] query parameter
     * in the next list request. Subsequent list requests will have their own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface ListNetworkOperationsRequest {
    /** ID of the Network resource to list operations for. */
    networkId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListNetworkOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListNetworkOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListNetworkOperationsResponse {
    /** List of operations for the specified network. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListNetworkOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListNetworkOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface MoveNetworkRequest {
    /** ID of the Network resource to move. */
    networkId: string;
    /** ID of the destination folder. */
    destinationFolderId: string;
}

export interface MoveNetworkMetadata {
    /** ID of the network that is being moved. */
    networkId: string;
}

const baseGetNetworkRequest: object = { networkId: '' };

export const GetNetworkRequest = {
    encode(
        message: GetNetworkRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.networkId !== '') {
            writer.uint32(10).string(message.networkId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetNetworkRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetNetworkRequest } as GetNetworkRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetNetworkRequest {
        const message = { ...baseGetNetworkRequest } as GetNetworkRequest;
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        } else {
            message.networkId = '';
        }
        return message;
    },

    toJSON(message: GetNetworkRequest): unknown {
        const obj: any = {};
        message.networkId !== undefined && (obj.networkId = message.networkId);
        return obj;
    },

    fromPartial(object: DeepPartial<GetNetworkRequest>): GetNetworkRequest {
        const message = { ...baseGetNetworkRequest } as GetNetworkRequest;
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        } else {
            message.networkId = '';
        }
        return message;
    },
};

const baseListNetworksRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListNetworksRequest = {
    encode(
        message: ListNetworksRequest,
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
    ): ListNetworksRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListNetworksRequest } as ListNetworksRequest;
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

    fromJSON(object: any): ListNetworksRequest {
        const message = { ...baseListNetworksRequest } as ListNetworksRequest;
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

    toJSON(message: ListNetworksRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(object: DeepPartial<ListNetworksRequest>): ListNetworksRequest {
        const message = { ...baseListNetworksRequest } as ListNetworksRequest;
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

const baseListNetworksResponse: object = { nextPageToken: '' };

export const ListNetworksResponse = {
    encode(
        message: ListNetworksResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.networks) {
            Network.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListNetworksResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListNetworksResponse } as ListNetworksResponse;
        message.networks = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networks.push(
                        Network.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListNetworksResponse {
        const message = { ...baseListNetworksResponse } as ListNetworksResponse;
        message.networks = [];
        if (object.networks !== undefined && object.networks !== null) {
            for (const e of object.networks) {
                message.networks.push(Network.fromJSON(e));
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

    toJSON(message: ListNetworksResponse): unknown {
        const obj: any = {};
        if (message.networks) {
            obj.networks = message.networks.map((e) =>
                e ? Network.toJSON(e) : undefined
            );
        } else {
            obj.networks = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListNetworksResponse>
    ): ListNetworksResponse {
        const message = { ...baseListNetworksResponse } as ListNetworksResponse;
        message.networks = [];
        if (object.networks !== undefined && object.networks !== null) {
            for (const e of object.networks) {
                message.networks.push(Network.fromPartial(e));
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

const baseCreateNetworkRequest: object = {
    folderId: '',
    name: '',
    description: '',
};

export const CreateNetworkRequest = {
    encode(
        message: CreateNetworkRequest,
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
            CreateNetworkRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork()
            ).ldelim();
        });
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateNetworkRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateNetworkRequest } as CreateNetworkRequest;
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
                    const entry4 = CreateNetworkRequest_LabelsEntry.decode(
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

    fromJSON(object: any): CreateNetworkRequest {
        const message = { ...baseCreateNetworkRequest } as CreateNetworkRequest;
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

    toJSON(message: CreateNetworkRequest): unknown {
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
        object: DeepPartial<CreateNetworkRequest>
    ): CreateNetworkRequest {
        const message = { ...baseCreateNetworkRequest } as CreateNetworkRequest;
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

const baseCreateNetworkRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateNetworkRequest_LabelsEntry = {
    encode(
        message: CreateNetworkRequest_LabelsEntry,
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
    ): CreateNetworkRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateNetworkRequest_LabelsEntry,
        } as CreateNetworkRequest_LabelsEntry;
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

    fromJSON(object: any): CreateNetworkRequest_LabelsEntry {
        const message = {
            ...baseCreateNetworkRequest_LabelsEntry,
        } as CreateNetworkRequest_LabelsEntry;
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

    toJSON(message: CreateNetworkRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateNetworkRequest_LabelsEntry>
    ): CreateNetworkRequest_LabelsEntry {
        const message = {
            ...baseCreateNetworkRequest_LabelsEntry,
        } as CreateNetworkRequest_LabelsEntry;
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

const baseCreateNetworkMetadata: object = { networkId: '' };

export const CreateNetworkMetadata = {
    encode(
        message: CreateNetworkMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.networkId !== '') {
            writer.uint32(10).string(message.networkId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateNetworkMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateNetworkMetadata,
        } as CreateNetworkMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateNetworkMetadata {
        const message = {
            ...baseCreateNetworkMetadata,
        } as CreateNetworkMetadata;
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        } else {
            message.networkId = '';
        }
        return message;
    },

    toJSON(message: CreateNetworkMetadata): unknown {
        const obj: any = {};
        message.networkId !== undefined && (obj.networkId = message.networkId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateNetworkMetadata>
    ): CreateNetworkMetadata {
        const message = {
            ...baseCreateNetworkMetadata,
        } as CreateNetworkMetadata;
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        } else {
            message.networkId = '';
        }
        return message;
    },
};

const baseUpdateNetworkRequest: object = {
    networkId: '',
    name: '',
    description: '',
};

export const UpdateNetworkRequest = {
    encode(
        message: UpdateNetworkRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.networkId !== '') {
            writer.uint32(10).string(message.networkId);
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
            UpdateNetworkRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateNetworkRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateNetworkRequest } as UpdateNetworkRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkId = reader.string();
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
                    const entry5 = UpdateNetworkRequest_LabelsEntry.decode(
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

    fromJSON(object: any): UpdateNetworkRequest {
        const message = { ...baseUpdateNetworkRequest } as UpdateNetworkRequest;
        message.labels = {};
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        } else {
            message.networkId = '';
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

    toJSON(message: UpdateNetworkRequest): unknown {
        const obj: any = {};
        message.networkId !== undefined && (obj.networkId = message.networkId);
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
        object: DeepPartial<UpdateNetworkRequest>
    ): UpdateNetworkRequest {
        const message = { ...baseUpdateNetworkRequest } as UpdateNetworkRequest;
        message.labels = {};
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        } else {
            message.networkId = '';
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

const baseUpdateNetworkRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateNetworkRequest_LabelsEntry = {
    encode(
        message: UpdateNetworkRequest_LabelsEntry,
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
    ): UpdateNetworkRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateNetworkRequest_LabelsEntry,
        } as UpdateNetworkRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateNetworkRequest_LabelsEntry {
        const message = {
            ...baseUpdateNetworkRequest_LabelsEntry,
        } as UpdateNetworkRequest_LabelsEntry;
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

    toJSON(message: UpdateNetworkRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateNetworkRequest_LabelsEntry>
    ): UpdateNetworkRequest_LabelsEntry {
        const message = {
            ...baseUpdateNetworkRequest_LabelsEntry,
        } as UpdateNetworkRequest_LabelsEntry;
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

const baseUpdateNetworkMetadata: object = { networkId: '' };

export const UpdateNetworkMetadata = {
    encode(
        message: UpdateNetworkMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.networkId !== '') {
            writer.uint32(10).string(message.networkId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateNetworkMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateNetworkMetadata,
        } as UpdateNetworkMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateNetworkMetadata {
        const message = {
            ...baseUpdateNetworkMetadata,
        } as UpdateNetworkMetadata;
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        } else {
            message.networkId = '';
        }
        return message;
    },

    toJSON(message: UpdateNetworkMetadata): unknown {
        const obj: any = {};
        message.networkId !== undefined && (obj.networkId = message.networkId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateNetworkMetadata>
    ): UpdateNetworkMetadata {
        const message = {
            ...baseUpdateNetworkMetadata,
        } as UpdateNetworkMetadata;
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        } else {
            message.networkId = '';
        }
        return message;
    },
};

const baseDeleteNetworkRequest: object = { networkId: '' };

export const DeleteNetworkRequest = {
    encode(
        message: DeleteNetworkRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.networkId !== '') {
            writer.uint32(10).string(message.networkId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteNetworkRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteNetworkRequest } as DeleteNetworkRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteNetworkRequest {
        const message = { ...baseDeleteNetworkRequest } as DeleteNetworkRequest;
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        } else {
            message.networkId = '';
        }
        return message;
    },

    toJSON(message: DeleteNetworkRequest): unknown {
        const obj: any = {};
        message.networkId !== undefined && (obj.networkId = message.networkId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteNetworkRequest>
    ): DeleteNetworkRequest {
        const message = { ...baseDeleteNetworkRequest } as DeleteNetworkRequest;
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        } else {
            message.networkId = '';
        }
        return message;
    },
};

const baseDeleteNetworkMetadata: object = { networkId: '' };

export const DeleteNetworkMetadata = {
    encode(
        message: DeleteNetworkMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.networkId !== '') {
            writer.uint32(10).string(message.networkId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteNetworkMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteNetworkMetadata,
        } as DeleteNetworkMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteNetworkMetadata {
        const message = {
            ...baseDeleteNetworkMetadata,
        } as DeleteNetworkMetadata;
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        } else {
            message.networkId = '';
        }
        return message;
    },

    toJSON(message: DeleteNetworkMetadata): unknown {
        const obj: any = {};
        message.networkId !== undefined && (obj.networkId = message.networkId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteNetworkMetadata>
    ): DeleteNetworkMetadata {
        const message = {
            ...baseDeleteNetworkMetadata,
        } as DeleteNetworkMetadata;
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        } else {
            message.networkId = '';
        }
        return message;
    },
};

const baseListNetworkSubnetsRequest: object = {
    networkId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListNetworkSubnetsRequest = {
    encode(
        message: ListNetworkSubnetsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.networkId !== '') {
            writer.uint32(10).string(message.networkId);
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
    ): ListNetworkSubnetsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListNetworkSubnetsRequest,
        } as ListNetworkSubnetsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkId = reader.string();
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

    fromJSON(object: any): ListNetworkSubnetsRequest {
        const message = {
            ...baseListNetworkSubnetsRequest,
        } as ListNetworkSubnetsRequest;
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        } else {
            message.networkId = '';
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

    toJSON(message: ListNetworkSubnetsRequest): unknown {
        const obj: any = {};
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListNetworkSubnetsRequest>
    ): ListNetworkSubnetsRequest {
        const message = {
            ...baseListNetworkSubnetsRequest,
        } as ListNetworkSubnetsRequest;
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        } else {
            message.networkId = '';
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

const baseListNetworkSubnetsResponse: object = { nextPageToken: '' };

export const ListNetworkSubnetsResponse = {
    encode(
        message: ListNetworkSubnetsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.subnets) {
            Subnet.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListNetworkSubnetsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListNetworkSubnetsResponse,
        } as ListNetworkSubnetsResponse;
        message.subnets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnets.push(
                        Subnet.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListNetworkSubnetsResponse {
        const message = {
            ...baseListNetworkSubnetsResponse,
        } as ListNetworkSubnetsResponse;
        message.subnets = [];
        if (object.subnets !== undefined && object.subnets !== null) {
            for (const e of object.subnets) {
                message.subnets.push(Subnet.fromJSON(e));
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

    toJSON(message: ListNetworkSubnetsResponse): unknown {
        const obj: any = {};
        if (message.subnets) {
            obj.subnets = message.subnets.map((e) =>
                e ? Subnet.toJSON(e) : undefined
            );
        } else {
            obj.subnets = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListNetworkSubnetsResponse>
    ): ListNetworkSubnetsResponse {
        const message = {
            ...baseListNetworkSubnetsResponse,
        } as ListNetworkSubnetsResponse;
        message.subnets = [];
        if (object.subnets !== undefined && object.subnets !== null) {
            for (const e of object.subnets) {
                message.subnets.push(Subnet.fromPartial(e));
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

const baseListNetworkOperationsRequest: object = {
    networkId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListNetworkOperationsRequest = {
    encode(
        message: ListNetworkOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.networkId !== '') {
            writer.uint32(10).string(message.networkId);
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
    ): ListNetworkOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListNetworkOperationsRequest,
        } as ListNetworkOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkId = reader.string();
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

    fromJSON(object: any): ListNetworkOperationsRequest {
        const message = {
            ...baseListNetworkOperationsRequest,
        } as ListNetworkOperationsRequest;
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        } else {
            message.networkId = '';
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

    toJSON(message: ListNetworkOperationsRequest): unknown {
        const obj: any = {};
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListNetworkOperationsRequest>
    ): ListNetworkOperationsRequest {
        const message = {
            ...baseListNetworkOperationsRequest,
        } as ListNetworkOperationsRequest;
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        } else {
            message.networkId = '';
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

const baseListNetworkOperationsResponse: object = { nextPageToken: '' };

export const ListNetworkOperationsResponse = {
    encode(
        message: ListNetworkOperationsResponse,
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
    ): ListNetworkOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListNetworkOperationsResponse,
        } as ListNetworkOperationsResponse;
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

    fromJSON(object: any): ListNetworkOperationsResponse {
        const message = {
            ...baseListNetworkOperationsResponse,
        } as ListNetworkOperationsResponse;
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

    toJSON(message: ListNetworkOperationsResponse): unknown {
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
        object: DeepPartial<ListNetworkOperationsResponse>
    ): ListNetworkOperationsResponse {
        const message = {
            ...baseListNetworkOperationsResponse,
        } as ListNetworkOperationsResponse;
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

const baseMoveNetworkRequest: object = {
    networkId: '',
    destinationFolderId: '',
};

export const MoveNetworkRequest = {
    encode(
        message: MoveNetworkRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.networkId !== '') {
            writer.uint32(10).string(message.networkId);
        }
        if (message.destinationFolderId !== '') {
            writer.uint32(18).string(message.destinationFolderId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): MoveNetworkRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMoveNetworkRequest } as MoveNetworkRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkId = reader.string();
                    break;
                case 2:
                    message.destinationFolderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MoveNetworkRequest {
        const message = { ...baseMoveNetworkRequest } as MoveNetworkRequest;
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        } else {
            message.networkId = '';
        }
        if (
            object.destinationFolderId !== undefined &&
            object.destinationFolderId !== null
        ) {
            message.destinationFolderId = String(object.destinationFolderId);
        } else {
            message.destinationFolderId = '';
        }
        return message;
    },

    toJSON(message: MoveNetworkRequest): unknown {
        const obj: any = {};
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },

    fromPartial(object: DeepPartial<MoveNetworkRequest>): MoveNetworkRequest {
        const message = { ...baseMoveNetworkRequest } as MoveNetworkRequest;
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        } else {
            message.networkId = '';
        }
        if (
            object.destinationFolderId !== undefined &&
            object.destinationFolderId !== null
        ) {
            message.destinationFolderId = object.destinationFolderId;
        } else {
            message.destinationFolderId = '';
        }
        return message;
    },
};

const baseMoveNetworkMetadata: object = { networkId: '' };

export const MoveNetworkMetadata = {
    encode(
        message: MoveNetworkMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.networkId !== '') {
            writer.uint32(10).string(message.networkId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): MoveNetworkMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMoveNetworkMetadata } as MoveNetworkMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MoveNetworkMetadata {
        const message = { ...baseMoveNetworkMetadata } as MoveNetworkMetadata;
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        } else {
            message.networkId = '';
        }
        return message;
    },

    toJSON(message: MoveNetworkMetadata): unknown {
        const obj: any = {};
        message.networkId !== undefined && (obj.networkId = message.networkId);
        return obj;
    },

    fromPartial(object: DeepPartial<MoveNetworkMetadata>): MoveNetworkMetadata {
        const message = { ...baseMoveNetworkMetadata } as MoveNetworkMetadata;
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        } else {
            message.networkId = '';
        }
        return message;
    },
};

/** A set of methods for managing Network resources. */
export const NetworkServiceService = {
    /**
     * Returns the specified Network resource.
     *
     * Get the list of available Network resources by making a [List] request.
     */
    get: {
        path: '/yandex.cloud.vpc.v1.NetworkService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetNetworkRequest) =>
            Buffer.from(GetNetworkRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetNetworkRequest.decode(value),
        responseSerialize: (value: Network) =>
            Buffer.from(Network.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Network.decode(value),
    },
    /** Retrieves the list of Network resources in the specified folder. */
    list: {
        path: '/yandex.cloud.vpc.v1.NetworkService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListNetworksRequest) =>
            Buffer.from(ListNetworksRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListNetworksRequest.decode(value),
        responseSerialize: (value: ListNetworksResponse) =>
            Buffer.from(ListNetworksResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListNetworksResponse.decode(value),
    },
    /**
     * Creates a network in the specified folder using the data specified in the request.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: {
        path: '/yandex.cloud.vpc.v1.NetworkService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateNetworkRequest) =>
            Buffer.from(CreateNetworkRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateNetworkRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Updates the specified network.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update: {
        path: '/yandex.cloud.vpc.v1.NetworkService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateNetworkRequest) =>
            Buffer.from(UpdateNetworkRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateNetworkRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified network. */
    delete: {
        path: '/yandex.cloud.vpc.v1.NetworkService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteNetworkRequest) =>
            Buffer.from(DeleteNetworkRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteNetworkRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists subnets from the specified network. */
    listSubnets: {
        path: '/yandex.cloud.vpc.v1.NetworkService/ListSubnets',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListNetworkSubnetsRequest) =>
            Buffer.from(ListNetworkSubnetsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListNetworkSubnetsRequest.decode(value),
        responseSerialize: (value: ListNetworkSubnetsResponse) =>
            Buffer.from(ListNetworkSubnetsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListNetworkSubnetsResponse.decode(value),
    },
    /** Lists operations for the specified network. */
    listOperations: {
        path: '/yandex.cloud.vpc.v1.NetworkService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListNetworkOperationsRequest) =>
            Buffer.from(ListNetworkOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListNetworkOperationsRequest.decode(value),
        responseSerialize: (value: ListNetworkOperationsResponse) =>
            Buffer.from(ListNetworkOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListNetworkOperationsResponse.decode(value),
    },
    /** Move network to another folder. */
    move: {
        path: '/yandex.cloud.vpc.v1.NetworkService/Move',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: MoveNetworkRequest) =>
            Buffer.from(MoveNetworkRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => MoveNetworkRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface NetworkServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Network resource.
     *
     * Get the list of available Network resources by making a [List] request.
     */
    get: handleUnaryCall<GetNetworkRequest, Network>;
    /** Retrieves the list of Network resources in the specified folder. */
    list: handleUnaryCall<ListNetworksRequest, ListNetworksResponse>;
    /**
     * Creates a network in the specified folder using the data specified in the request.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: handleUnaryCall<CreateNetworkRequest, Operation>;
    /**
     * Updates the specified network.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update: handleUnaryCall<UpdateNetworkRequest, Operation>;
    /** Deletes the specified network. */
    delete: handleUnaryCall<DeleteNetworkRequest, Operation>;
    /** Lists subnets from the specified network. */
    listSubnets: handleUnaryCall<
        ListNetworkSubnetsRequest,
        ListNetworkSubnetsResponse
    >;
    /** Lists operations for the specified network. */
    listOperations: handleUnaryCall<
        ListNetworkOperationsRequest,
        ListNetworkOperationsResponse
    >;
    /** Move network to another folder. */
    move: handleUnaryCall<MoveNetworkRequest, Operation>;
}

export interface NetworkServiceClient extends Client {
    /**
     * Returns the specified Network resource.
     *
     * Get the list of available Network resources by making a [List] request.
     */
    get(
        request: GetNetworkRequest,
        callback: (error: ServiceError | null, response: Network) => void
    ): ClientUnaryCall;
    get(
        request: GetNetworkRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Network) => void
    ): ClientUnaryCall;
    get(
        request: GetNetworkRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Network) => void
    ): ClientUnaryCall;
    /** Retrieves the list of Network resources in the specified folder. */
    list(
        request: ListNetworksRequest,
        callback: (
            error: ServiceError | null,
            response: ListNetworksResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListNetworksRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListNetworksResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListNetworksRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListNetworksResponse
        ) => void
    ): ClientUnaryCall;
    /**
     * Creates a network in the specified folder using the data specified in the request.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create(
        request: CreateNetworkRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateNetworkRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateNetworkRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /**
     * Updates the specified network.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update(
        request: UpdateNetworkRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateNetworkRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateNetworkRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified network. */
    delete(
        request: DeleteNetworkRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteNetworkRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteNetworkRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Lists subnets from the specified network. */
    listSubnets(
        request: ListNetworkSubnetsRequest,
        callback: (
            error: ServiceError | null,
            response: ListNetworkSubnetsResponse
        ) => void
    ): ClientUnaryCall;
    listSubnets(
        request: ListNetworkSubnetsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListNetworkSubnetsResponse
        ) => void
    ): ClientUnaryCall;
    listSubnets(
        request: ListNetworkSubnetsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListNetworkSubnetsResponse
        ) => void
    ): ClientUnaryCall;
    /** Lists operations for the specified network. */
    listOperations(
        request: ListNetworkOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListNetworkOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListNetworkOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListNetworkOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListNetworkOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListNetworkOperationsResponse
        ) => void
    ): ClientUnaryCall;
    /** Move network to another folder. */
    move(
        request: MoveNetworkRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    move(
        request: MoveNetworkRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    move(
        request: MoveNetworkRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
}

export const NetworkServiceClient = makeGenericClientConstructor(
    NetworkServiceService,
    'yandex.cloud.vpc.v1.NetworkService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): NetworkServiceClient;
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