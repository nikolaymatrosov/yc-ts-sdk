/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { Reference } from '../../../../yandex/cloud/reference/reference';
import {
    IpVersion,
    Subnet,
    DhcpOptions,
    ipVersionFromJSON,
    ipVersionToJSON,
} from '../../../../yandex/cloud/vpc/v1/subnet';
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

export interface GetSubnetRequest {
    /**
     * ID of the Subnet resource to return.
     * To get the subnet ID use a [SubnetService.List] request.
     */
    subnetId: string;
}

export interface ListSubnetsRequest {
    /**
     * ID of the folder to list subnets in.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListSubnetsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListSubnetsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Subnet.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     */
    filter: string;
}

export interface ListSubnetsResponse {
    /** List of Subnet resources. */
    subnets: Subnet[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListSubnetsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListSubnetsRequest.page_token] query parameter
     * in the next list request. Subsequent list requests will have their own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateSubnetRequest {
    /**
     * ID of the folder to create a subnet in.
     * To get folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the subnet.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the subnet. */
    description: string;
    /** Resource labels, `` key:value `` pairs. */
    labels: { [key: string]: string };
    /** ID of the network to create subnet in. */
    networkId: string;
    /**
     * ID of the availability zone where the subnet resides.
     * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request.
     */
    zoneId: string;
    /**
     * CIDR block.
     * The range of internal addresses that are defined for this subnet.
     * This field can be set only at Subnet resource creation time and cannot be changed.
     * For example, 10.0.0.0/22 or 192.168.0.0/24.
     * Minimum subnet size is /28, maximum subnet size is /16.
     */
    v4CidrBlocks: string[];
    /** ID of route table the subnet is linked to. */
    routeTableId: string;
    dhcpOptions: DhcpOptions | undefined;
}

export interface CreateSubnetRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface CreateSubnetMetadata {
    /** ID of the subnet that is being created. */
    subnetId: string;
}

export interface UpdateSubnetRequest {
    /** ID of the Subnet resource to update. */
    subnetId: string;
    /** Field mask that specifies which fields of the Subnet resource are going to be updated. */
    updateMask: FieldMask | undefined;
    /**
     * Name of the subnet.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the subnet. */
    description: string;
    /** Resource labels as `` key:value `` pairs. */
    labels: { [key: string]: string };
    /** ID of route table the subnet is linked to. */
    routeTableId: string;
    dhcpOptions: DhcpOptions | undefined;
}

export interface UpdateSubnetRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateSubnetMetadata {
    /** ID of the Subnet resource that is being updated. */
    subnetId: string;
}

export interface DeleteSubnetRequest {
    /**
     * ID of the subnet to delete.
     * To get the subnet ID use a [SubnetService.List] request.
     */
    subnetId: string;
}

export interface DeleteSubnetMetadata {
    /** ID of the Subnet resource that is being deleted. */
    subnetId: string;
}

export interface ListSubnetOperationsRequest {
    /** ID of the Subnet resource to list operations for. */
    subnetId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListSubnetOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListSubnetOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListSubnetOperationsResponse {
    /** List of operations for the specified Subnet resource. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListSubnetOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListSubnetOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}

export interface MoveSubnetRequest {
    /** ID of the Subnet resource to move. */
    subnetId: string;
    /** ID of the destination folder. */
    destinationFolderId: string;
}

export interface MoveSubnetMetadata {
    /** ID of the Subnet resource that is being moved. */
    subnetId: string;
}

export interface ListUsedAddressesRequest {
    subnetId: string;
    pageSize: number;
    pageToken: string;
    filter: string;
}

export interface ListUsedAddressesResponse {
    addresses: UsedAddress[];
    nextPageToken: string;
}

export interface UsedAddress {
    address: string;
    ipVersion: IpVersion;
    references: Reference[];
}

const baseGetSubnetRequest: object = { subnetId: '' };

export const GetSubnetRequest = {
    encode(
        message: GetSubnetRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetSubnetRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetSubnetRequest } as GetSubnetRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetSubnetRequest {
        const message = { ...baseGetSubnetRequest } as GetSubnetRequest;
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        } else {
            message.subnetId = '';
        }
        return message;
    },

    toJSON(message: GetSubnetRequest): unknown {
        const obj: any = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },

    fromPartial(object: DeepPartial<GetSubnetRequest>): GetSubnetRequest {
        const message = { ...baseGetSubnetRequest } as GetSubnetRequest;
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        } else {
            message.subnetId = '';
        }
        return message;
    },
};

const baseListSubnetsRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListSubnetsRequest = {
    encode(
        message: ListSubnetsRequest,
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
    ): ListSubnetsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListSubnetsRequest } as ListSubnetsRequest;
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

    fromJSON(object: any): ListSubnetsRequest {
        const message = { ...baseListSubnetsRequest } as ListSubnetsRequest;
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

    toJSON(message: ListSubnetsRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(object: DeepPartial<ListSubnetsRequest>): ListSubnetsRequest {
        const message = { ...baseListSubnetsRequest } as ListSubnetsRequest;
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

const baseListSubnetsResponse: object = { nextPageToken: '' };

export const ListSubnetsResponse = {
    encode(
        message: ListSubnetsResponse,
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
    ): ListSubnetsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListSubnetsResponse } as ListSubnetsResponse;
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

    fromJSON(object: any): ListSubnetsResponse {
        const message = { ...baseListSubnetsResponse } as ListSubnetsResponse;
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

    toJSON(message: ListSubnetsResponse): unknown {
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

    fromPartial(object: DeepPartial<ListSubnetsResponse>): ListSubnetsResponse {
        const message = { ...baseListSubnetsResponse } as ListSubnetsResponse;
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

const baseCreateSubnetRequest: object = {
    folderId: '',
    name: '',
    description: '',
    networkId: '',
    zoneId: '',
    v4CidrBlocks: '',
    routeTableId: '',
};

export const CreateSubnetRequest = {
    encode(
        message: CreateSubnetRequest,
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
            CreateSubnetRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork()
            ).ldelim();
        });
        if (message.networkId !== '') {
            writer.uint32(42).string(message.networkId);
        }
        if (message.zoneId !== '') {
            writer.uint32(50).string(message.zoneId);
        }
        for (const v of message.v4CidrBlocks) {
            writer.uint32(58).string(v!);
        }
        if (message.routeTableId !== '') {
            writer.uint32(74).string(message.routeTableId);
        }
        if (message.dhcpOptions !== undefined) {
            DhcpOptions.encode(
                message.dhcpOptions,
                writer.uint32(82).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateSubnetRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateSubnetRequest } as CreateSubnetRequest;
        message.labels = {};
        message.v4CidrBlocks = [];
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
                    const entry4 = CreateSubnetRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.networkId = reader.string();
                    break;
                case 6:
                    message.zoneId = reader.string();
                    break;
                case 7:
                    message.v4CidrBlocks.push(reader.string());
                    break;
                case 9:
                    message.routeTableId = reader.string();
                    break;
                case 10:
                    message.dhcpOptions = DhcpOptions.decode(
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

    fromJSON(object: any): CreateSubnetRequest {
        const message = { ...baseCreateSubnetRequest } as CreateSubnetRequest;
        message.labels = {};
        message.v4CidrBlocks = [];
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
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = String(object.networkId);
        } else {
            message.networkId = '';
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        } else {
            message.zoneId = '';
        }
        if (object.v4CidrBlocks !== undefined && object.v4CidrBlocks !== null) {
            for (const e of object.v4CidrBlocks) {
                message.v4CidrBlocks.push(String(e));
            }
        }
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = String(object.routeTableId);
        } else {
            message.routeTableId = '';
        }
        if (object.dhcpOptions !== undefined && object.dhcpOptions !== null) {
            message.dhcpOptions = DhcpOptions.fromJSON(object.dhcpOptions);
        } else {
            message.dhcpOptions = undefined;
        }
        return message;
    },

    toJSON(message: CreateSubnetRequest): unknown {
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
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        if (message.v4CidrBlocks) {
            obj.v4CidrBlocks = message.v4CidrBlocks.map((e) => e);
        } else {
            obj.v4CidrBlocks = [];
        }
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        message.dhcpOptions !== undefined &&
            (obj.dhcpOptions = message.dhcpOptions
                ? DhcpOptions.toJSON(message.dhcpOptions)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<CreateSubnetRequest>): CreateSubnetRequest {
        const message = { ...baseCreateSubnetRequest } as CreateSubnetRequest;
        message.labels = {};
        message.v4CidrBlocks = [];
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
        if (object.networkId !== undefined && object.networkId !== null) {
            message.networkId = object.networkId;
        } else {
            message.networkId = '';
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        } else {
            message.zoneId = '';
        }
        if (object.v4CidrBlocks !== undefined && object.v4CidrBlocks !== null) {
            for (const e of object.v4CidrBlocks) {
                message.v4CidrBlocks.push(e);
            }
        }
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = object.routeTableId;
        } else {
            message.routeTableId = '';
        }
        if (object.dhcpOptions !== undefined && object.dhcpOptions !== null) {
            message.dhcpOptions = DhcpOptions.fromPartial(object.dhcpOptions);
        } else {
            message.dhcpOptions = undefined;
        }
        return message;
    },
};

const baseCreateSubnetRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateSubnetRequest_LabelsEntry = {
    encode(
        message: CreateSubnetRequest_LabelsEntry,
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
    ): CreateSubnetRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateSubnetRequest_LabelsEntry,
        } as CreateSubnetRequest_LabelsEntry;
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

    fromJSON(object: any): CreateSubnetRequest_LabelsEntry {
        const message = {
            ...baseCreateSubnetRequest_LabelsEntry,
        } as CreateSubnetRequest_LabelsEntry;
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

    toJSON(message: CreateSubnetRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateSubnetRequest_LabelsEntry>
    ): CreateSubnetRequest_LabelsEntry {
        const message = {
            ...baseCreateSubnetRequest_LabelsEntry,
        } as CreateSubnetRequest_LabelsEntry;
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

const baseCreateSubnetMetadata: object = { subnetId: '' };

export const CreateSubnetMetadata = {
    encode(
        message: CreateSubnetMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateSubnetMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateSubnetMetadata } as CreateSubnetMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateSubnetMetadata {
        const message = { ...baseCreateSubnetMetadata } as CreateSubnetMetadata;
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        } else {
            message.subnetId = '';
        }
        return message;
    },

    toJSON(message: CreateSubnetMetadata): unknown {
        const obj: any = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateSubnetMetadata>
    ): CreateSubnetMetadata {
        const message = { ...baseCreateSubnetMetadata } as CreateSubnetMetadata;
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        } else {
            message.subnetId = '';
        }
        return message;
    },
};

const baseUpdateSubnetRequest: object = {
    subnetId: '',
    name: '',
    description: '',
    routeTableId: '',
};

export const UpdateSubnetRequest = {
    encode(
        message: UpdateSubnetRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
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
            UpdateSubnetRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        if (message.routeTableId !== '') {
            writer.uint32(50).string(message.routeTableId);
        }
        if (message.dhcpOptions !== undefined) {
            DhcpOptions.encode(
                message.dhcpOptions,
                writer.uint32(58).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateSubnetRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateSubnetRequest } as UpdateSubnetRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
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
                    const entry5 = UpdateSubnetRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.routeTableId = reader.string();
                    break;
                case 7:
                    message.dhcpOptions = DhcpOptions.decode(
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

    fromJSON(object: any): UpdateSubnetRequest {
        const message = { ...baseUpdateSubnetRequest } as UpdateSubnetRequest;
        message.labels = {};
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        } else {
            message.subnetId = '';
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
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = String(object.routeTableId);
        } else {
            message.routeTableId = '';
        }
        if (object.dhcpOptions !== undefined && object.dhcpOptions !== null) {
            message.dhcpOptions = DhcpOptions.fromJSON(object.dhcpOptions);
        } else {
            message.dhcpOptions = undefined;
        }
        return message;
    },

    toJSON(message: UpdateSubnetRequest): unknown {
        const obj: any = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
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
        message.routeTableId !== undefined &&
            (obj.routeTableId = message.routeTableId);
        message.dhcpOptions !== undefined &&
            (obj.dhcpOptions = message.dhcpOptions
                ? DhcpOptions.toJSON(message.dhcpOptions)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<UpdateSubnetRequest>): UpdateSubnetRequest {
        const message = { ...baseUpdateSubnetRequest } as UpdateSubnetRequest;
        message.labels = {};
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        } else {
            message.subnetId = '';
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
        if (object.routeTableId !== undefined && object.routeTableId !== null) {
            message.routeTableId = object.routeTableId;
        } else {
            message.routeTableId = '';
        }
        if (object.dhcpOptions !== undefined && object.dhcpOptions !== null) {
            message.dhcpOptions = DhcpOptions.fromPartial(object.dhcpOptions);
        } else {
            message.dhcpOptions = undefined;
        }
        return message;
    },
};

const baseUpdateSubnetRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateSubnetRequest_LabelsEntry = {
    encode(
        message: UpdateSubnetRequest_LabelsEntry,
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
    ): UpdateSubnetRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateSubnetRequest_LabelsEntry,
        } as UpdateSubnetRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateSubnetRequest_LabelsEntry {
        const message = {
            ...baseUpdateSubnetRequest_LabelsEntry,
        } as UpdateSubnetRequest_LabelsEntry;
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

    toJSON(message: UpdateSubnetRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateSubnetRequest_LabelsEntry>
    ): UpdateSubnetRequest_LabelsEntry {
        const message = {
            ...baseUpdateSubnetRequest_LabelsEntry,
        } as UpdateSubnetRequest_LabelsEntry;
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

const baseUpdateSubnetMetadata: object = { subnetId: '' };

export const UpdateSubnetMetadata = {
    encode(
        message: UpdateSubnetMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateSubnetMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateSubnetMetadata } as UpdateSubnetMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateSubnetMetadata {
        const message = { ...baseUpdateSubnetMetadata } as UpdateSubnetMetadata;
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        } else {
            message.subnetId = '';
        }
        return message;
    },

    toJSON(message: UpdateSubnetMetadata): unknown {
        const obj: any = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateSubnetMetadata>
    ): UpdateSubnetMetadata {
        const message = { ...baseUpdateSubnetMetadata } as UpdateSubnetMetadata;
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        } else {
            message.subnetId = '';
        }
        return message;
    },
};

const baseDeleteSubnetRequest: object = { subnetId: '' };

export const DeleteSubnetRequest = {
    encode(
        message: DeleteSubnetRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteSubnetRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteSubnetRequest } as DeleteSubnetRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteSubnetRequest {
        const message = { ...baseDeleteSubnetRequest } as DeleteSubnetRequest;
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        } else {
            message.subnetId = '';
        }
        return message;
    },

    toJSON(message: DeleteSubnetRequest): unknown {
        const obj: any = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },

    fromPartial(object: DeepPartial<DeleteSubnetRequest>): DeleteSubnetRequest {
        const message = { ...baseDeleteSubnetRequest } as DeleteSubnetRequest;
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        } else {
            message.subnetId = '';
        }
        return message;
    },
};

const baseDeleteSubnetMetadata: object = { subnetId: '' };

export const DeleteSubnetMetadata = {
    encode(
        message: DeleteSubnetMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteSubnetMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteSubnetMetadata } as DeleteSubnetMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteSubnetMetadata {
        const message = { ...baseDeleteSubnetMetadata } as DeleteSubnetMetadata;
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        } else {
            message.subnetId = '';
        }
        return message;
    },

    toJSON(message: DeleteSubnetMetadata): unknown {
        const obj: any = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteSubnetMetadata>
    ): DeleteSubnetMetadata {
        const message = { ...baseDeleteSubnetMetadata } as DeleteSubnetMetadata;
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        } else {
            message.subnetId = '';
        }
        return message;
    },
};

const baseListSubnetOperationsRequest: object = {
    subnetId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListSubnetOperationsRequest = {
    encode(
        message: ListSubnetOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
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
    ): ListSubnetOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListSubnetOperationsRequest,
        } as ListSubnetOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
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

    fromJSON(object: any): ListSubnetOperationsRequest {
        const message = {
            ...baseListSubnetOperationsRequest,
        } as ListSubnetOperationsRequest;
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        } else {
            message.subnetId = '';
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

    toJSON(message: ListSubnetOperationsRequest): unknown {
        const obj: any = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListSubnetOperationsRequest>
    ): ListSubnetOperationsRequest {
        const message = {
            ...baseListSubnetOperationsRequest,
        } as ListSubnetOperationsRequest;
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        } else {
            message.subnetId = '';
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

const baseListSubnetOperationsResponse: object = { nextPageToken: '' };

export const ListSubnetOperationsResponse = {
    encode(
        message: ListSubnetOperationsResponse,
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
    ): ListSubnetOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListSubnetOperationsResponse,
        } as ListSubnetOperationsResponse;
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

    fromJSON(object: any): ListSubnetOperationsResponse {
        const message = {
            ...baseListSubnetOperationsResponse,
        } as ListSubnetOperationsResponse;
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

    toJSON(message: ListSubnetOperationsResponse): unknown {
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
        object: DeepPartial<ListSubnetOperationsResponse>
    ): ListSubnetOperationsResponse {
        const message = {
            ...baseListSubnetOperationsResponse,
        } as ListSubnetOperationsResponse;
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

const baseMoveSubnetRequest: object = { subnetId: '', destinationFolderId: '' };

export const MoveSubnetRequest = {
    encode(
        message: MoveSubnetRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
        }
        if (message.destinationFolderId !== '') {
            writer.uint32(18).string(message.destinationFolderId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MoveSubnetRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMoveSubnetRequest } as MoveSubnetRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
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

    fromJSON(object: any): MoveSubnetRequest {
        const message = { ...baseMoveSubnetRequest } as MoveSubnetRequest;
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        } else {
            message.subnetId = '';
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

    toJSON(message: MoveSubnetRequest): unknown {
        const obj: any = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },

    fromPartial(object: DeepPartial<MoveSubnetRequest>): MoveSubnetRequest {
        const message = { ...baseMoveSubnetRequest } as MoveSubnetRequest;
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        } else {
            message.subnetId = '';
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

const baseMoveSubnetMetadata: object = { subnetId: '' };

export const MoveSubnetMetadata = {
    encode(
        message: MoveSubnetMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): MoveSubnetMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMoveSubnetMetadata } as MoveSubnetMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MoveSubnetMetadata {
        const message = { ...baseMoveSubnetMetadata } as MoveSubnetMetadata;
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        } else {
            message.subnetId = '';
        }
        return message;
    },

    toJSON(message: MoveSubnetMetadata): unknown {
        const obj: any = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        return obj;
    },

    fromPartial(object: DeepPartial<MoveSubnetMetadata>): MoveSubnetMetadata {
        const message = { ...baseMoveSubnetMetadata } as MoveSubnetMetadata;
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        } else {
            message.subnetId = '';
        }
        return message;
    },
};

const baseListUsedAddressesRequest: object = {
    subnetId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListUsedAddressesRequest = {
    encode(
        message: ListUsedAddressesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.subnetId !== '') {
            writer.uint32(10).string(message.subnetId);
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
    ): ListUsedAddressesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListUsedAddressesRequest,
        } as ListUsedAddressesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subnetId = reader.string();
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

    fromJSON(object: any): ListUsedAddressesRequest {
        const message = {
            ...baseListUsedAddressesRequest,
        } as ListUsedAddressesRequest;
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = String(object.subnetId);
        } else {
            message.subnetId = '';
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

    toJSON(message: ListUsedAddressesRequest): unknown {
        const obj: any = {};
        message.subnetId !== undefined && (obj.subnetId = message.subnetId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListUsedAddressesRequest>
    ): ListUsedAddressesRequest {
        const message = {
            ...baseListUsedAddressesRequest,
        } as ListUsedAddressesRequest;
        if (object.subnetId !== undefined && object.subnetId !== null) {
            message.subnetId = object.subnetId;
        } else {
            message.subnetId = '';
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

const baseListUsedAddressesResponse: object = { nextPageToken: '' };

export const ListUsedAddressesResponse = {
    encode(
        message: ListUsedAddressesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.addresses) {
            UsedAddress.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListUsedAddressesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListUsedAddressesResponse,
        } as ListUsedAddressesResponse;
        message.addresses = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addresses.push(
                        UsedAddress.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListUsedAddressesResponse {
        const message = {
            ...baseListUsedAddressesResponse,
        } as ListUsedAddressesResponse;
        message.addresses = [];
        if (object.addresses !== undefined && object.addresses !== null) {
            for (const e of object.addresses) {
                message.addresses.push(UsedAddress.fromJSON(e));
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

    toJSON(message: ListUsedAddressesResponse): unknown {
        const obj: any = {};
        if (message.addresses) {
            obj.addresses = message.addresses.map((e) =>
                e ? UsedAddress.toJSON(e) : undefined
            );
        } else {
            obj.addresses = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListUsedAddressesResponse>
    ): ListUsedAddressesResponse {
        const message = {
            ...baseListUsedAddressesResponse,
        } as ListUsedAddressesResponse;
        message.addresses = [];
        if (object.addresses !== undefined && object.addresses !== null) {
            for (const e of object.addresses) {
                message.addresses.push(UsedAddress.fromPartial(e));
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

const baseUsedAddress: object = { address: '', ipVersion: 0 };

export const UsedAddress = {
    encode(
        message: UsedAddress,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.ipVersion !== 0) {
            writer.uint32(16).int32(message.ipVersion);
        }
        for (const v of message.references) {
            Reference.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UsedAddress {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUsedAddress } as UsedAddress;
        message.references = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.ipVersion = reader.int32() as any;
                    break;
                case 3:
                    message.references.push(
                        Reference.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UsedAddress {
        const message = { ...baseUsedAddress } as UsedAddress;
        message.references = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        } else {
            message.address = '';
        }
        if (object.ipVersion !== undefined && object.ipVersion !== null) {
            message.ipVersion = ipVersionFromJSON(object.ipVersion);
        } else {
            message.ipVersion = 0;
        }
        if (object.references !== undefined && object.references !== null) {
            for (const e of object.references) {
                message.references.push(Reference.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: UsedAddress): unknown {
        const obj: any = {};
        message.address !== undefined && (obj.address = message.address);
        message.ipVersion !== undefined &&
            (obj.ipVersion = ipVersionToJSON(message.ipVersion));
        if (message.references) {
            obj.references = message.references.map((e) =>
                e ? Reference.toJSON(e) : undefined
            );
        } else {
            obj.references = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<UsedAddress>): UsedAddress {
        const message = { ...baseUsedAddress } as UsedAddress;
        message.references = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        } else {
            message.address = '';
        }
        if (object.ipVersion !== undefined && object.ipVersion !== null) {
            message.ipVersion = object.ipVersion;
        } else {
            message.ipVersion = 0;
        }
        if (object.references !== undefined && object.references !== null) {
            for (const e of object.references) {
                message.references.push(Reference.fromPartial(e));
            }
        }
        return message;
    },
};

/** A set of methods for managing Subnet resources. */
export const SubnetServiceService = {
    /**
     * Returns the specified Subnet resource.
     *
     * To get the list of available Subnet resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.vpc.v1.SubnetService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetSubnetRequest) =>
            Buffer.from(GetSubnetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetSubnetRequest.decode(value),
        responseSerialize: (value: Subnet) =>
            Buffer.from(Subnet.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Subnet.decode(value),
    },
    /** Retrieves the list of Subnet resources in the specified folder. */
    list: {
        path: '/yandex.cloud.vpc.v1.SubnetService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListSubnetsRequest) =>
            Buffer.from(ListSubnetsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => ListSubnetsRequest.decode(value),
        responseSerialize: (value: ListSubnetsResponse) =>
            Buffer.from(ListSubnetsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListSubnetsResponse.decode(value),
    },
    /**
     * Creates a subnet in the specified folder and network.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: {
        path: '/yandex.cloud.vpc.v1.SubnetService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateSubnetRequest) =>
            Buffer.from(CreateSubnetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateSubnetRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /**
     * Updates the specified subnet.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update: {
        path: '/yandex.cloud.vpc.v1.SubnetService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateSubnetRequest) =>
            Buffer.from(UpdateSubnetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateSubnetRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified subnet. */
    delete: {
        path: '/yandex.cloud.vpc.v1.SubnetService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteSubnetRequest) =>
            Buffer.from(DeleteSubnetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteSubnetRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** List operations for the specified subnet. */
    listOperations: {
        path: '/yandex.cloud.vpc.v1.SubnetService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListSubnetOperationsRequest) =>
            Buffer.from(ListSubnetOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListSubnetOperationsRequest.decode(value),
        responseSerialize: (value: ListSubnetOperationsResponse) =>
            Buffer.from(ListSubnetOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListSubnetOperationsResponse.decode(value),
    },
    /** Move subnet to another folder. */
    move: {
        path: '/yandex.cloud.vpc.v1.SubnetService/Move',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: MoveSubnetRequest) =>
            Buffer.from(MoveSubnetRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => MoveSubnetRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** List used addresses in specified subnet. */
    listUsedAddresses: {
        path: '/yandex.cloud.vpc.v1.SubnetService/ListUsedAddresses',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListUsedAddressesRequest) =>
            Buffer.from(ListUsedAddressesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListUsedAddressesRequest.decode(value),
        responseSerialize: (value: ListUsedAddressesResponse) =>
            Buffer.from(ListUsedAddressesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListUsedAddressesResponse.decode(value),
    },
} as const;

export interface SubnetServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Subnet resource.
     *
     * To get the list of available Subnet resources, make a [List] request.
     */
    get: handleUnaryCall<GetSubnetRequest, Subnet>;
    /** Retrieves the list of Subnet resources in the specified folder. */
    list: handleUnaryCall<ListSubnetsRequest, ListSubnetsResponse>;
    /**
     * Creates a subnet in the specified folder and network.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: handleUnaryCall<CreateSubnetRequest, Operation>;
    /**
     * Updates the specified subnet.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update: handleUnaryCall<UpdateSubnetRequest, Operation>;
    /** Deletes the specified subnet. */
    delete: handleUnaryCall<DeleteSubnetRequest, Operation>;
    /** List operations for the specified subnet. */
    listOperations: handleUnaryCall<
        ListSubnetOperationsRequest,
        ListSubnetOperationsResponse
    >;
    /** Move subnet to another folder. */
    move: handleUnaryCall<MoveSubnetRequest, Operation>;
    /** List used addresses in specified subnet. */
    listUsedAddresses: handleUnaryCall<
        ListUsedAddressesRequest,
        ListUsedAddressesResponse
    >;
}

export interface SubnetServiceClient extends Client {
    /**
     * Returns the specified Subnet resource.
     *
     * To get the list of available Subnet resources, make a [List] request.
     */
    get(
        request: GetSubnetRequest,
        callback: (error: ServiceError | null, response: Subnet) => void
    ): ClientUnaryCall;
    get(
        request: GetSubnetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Subnet) => void
    ): ClientUnaryCall;
    get(
        request: GetSubnetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Subnet) => void
    ): ClientUnaryCall;
    /** Retrieves the list of Subnet resources in the specified folder. */
    list(
        request: ListSubnetsRequest,
        callback: (
            error: ServiceError | null,
            response: ListSubnetsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListSubnetsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListSubnetsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListSubnetsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListSubnetsResponse
        ) => void
    ): ClientUnaryCall;
    /**
     * Creates a subnet in the specified folder and network.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create(
        request: CreateSubnetRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateSubnetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateSubnetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /**
     * Updates the specified subnet.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update(
        request: UpdateSubnetRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateSubnetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateSubnetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified subnet. */
    delete(
        request: DeleteSubnetRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteSubnetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteSubnetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** List operations for the specified subnet. */
    listOperations(
        request: ListSubnetOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListSubnetOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListSubnetOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListSubnetOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListSubnetOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListSubnetOperationsResponse
        ) => void
    ): ClientUnaryCall;
    /** Move subnet to another folder. */
    move(
        request: MoveSubnetRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    move(
        request: MoveSubnetRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    move(
        request: MoveSubnetRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** List used addresses in specified subnet. */
    listUsedAddresses(
        request: ListUsedAddressesRequest,
        callback: (
            error: ServiceError | null,
            response: ListUsedAddressesResponse
        ) => void
    ): ClientUnaryCall;
    listUsedAddresses(
        request: ListUsedAddressesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListUsedAddressesResponse
        ) => void
    ): ClientUnaryCall;
    listUsedAddresses(
        request: ListUsedAddressesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListUsedAddressesResponse
        ) => void
    ): ClientUnaryCall;
}

export const SubnetServiceClient = makeGenericClientConstructor(
    SubnetServiceService,
    'yandex.cloud.vpc.v1.SubnetService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): SubnetServiceClient;
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
