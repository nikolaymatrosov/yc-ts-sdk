/* eslint-disable */
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import {
    Address,
    AddressRequirements,
} from '../../../../yandex/cloud/vpc/v1/address';
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

export interface GetAddressRequest {
    /**
     * ID of the Address resource to return.
     *
     * To get Address resource ID make a [AddressService.List] request.
     */
    addressId: string;
}

export interface GetAddressByValueRequest {
    externalIpv4Address: string | undefined;
}

export interface ListAddressesRequest {
    /**
     * ID of the folder to list addresses in.
     *
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListAddressesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListAddressesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters Address listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Address.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name=my-address`.
     */
    filter: string;
}

export interface ListAddressesResponse {
    /** List of addresses. */
    addresses: Address[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListAddressesRequest.page_size], use `next_page_token` as the value
     * for the [ListAddressesRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface CreateAddressRequest {
    /**
     * ID of the folder to create a address in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the address.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the address. */
    description: string;
    /** Address labels as `key:value` pairs. */
    labels: { [key: string]: string };
    externalIpv4AddressSpec: ExternalIpv4AddressSpec | undefined;
}

export interface CreateAddressRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface ExternalIpv4AddressSpec {
    /** Value of address. */
    address: string;
    /** Availability zone from which the address will be allocated. */
    zoneId: string;
    /** Parameters of the allocated address, for example DDoS Protection. */
    requirements: AddressRequirements | undefined;
}

export interface CreateAddressMetadata {
    /** ID of the address that is being created. */
    addressId: string;
}

export interface UpdateAddressRequest {
    /**
     * ID of the address to update.
     *
     * To get the address ID make a [AddressService.List] request.
     */
    addressId: string;
    /** Field mask that specifies which attributes of the Address should be updated. */
    updateMask: FieldMask | undefined;
    /**
     * New name for the address.
     * The name must be unique within the folder.
     */
    name: string;
    /** New description of the address. */
    description: string;
    /**
     * Address labels as `key:value` pairs.
     *
     * Existing set of labels is completely replaced by the provided set, so if you just want
     * to add or remove a label:
     * 1. Get the current set of labels with a [AddressService.Get] request.
     * 2. Add or remove a label in this set.
     * 3. Send the new set in this field.
     */
    labels: { [key: string]: string };
    /** Specifies if address is reserved or not. */
    reserved: boolean;
}

export interface UpdateAddressRequest_LabelsEntry {
    key: string;
    value: string;
}

export interface UpdateAddressMetadata {
    /** ID of the Address that is being updated. */
    addressId: string;
}

export interface DeleteAddressRequest {
    /**
     * ID of the address to delete.
     *
     * To get a address ID make a [AddressService.List] request.
     */
    addressId: string;
}

export interface DeleteAddressMetadata {
    /** ID of the address that is being deleted. */
    addressId: string;
}

export interface ListAddressOperationsRequest {
    /**
     * ID of the address to list operations for.
     *
     * To get a address ID make a [tAddressService.List] request.
     */
    addressId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListAddressOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListAddressOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}

export interface ListAddressOperationsResponse {
    /** List of operations for the specified address. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListAddressOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListAddressOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}

export interface MoveAddressRequest {
    addressId: string;
    destinationFolderId: string;
}

export interface MoveAddressMetadata {
    addressId: string;
}

const baseGetAddressRequest: object = { addressId: '' };

export const GetAddressRequest = {
    encode(
        message: GetAddressRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.addressId !== '') {
            writer.uint32(10).string(message.addressId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetAddressRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetAddressRequest } as GetAddressRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetAddressRequest {
        const message = { ...baseGetAddressRequest } as GetAddressRequest;
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = String(object.addressId);
        } else {
            message.addressId = '';
        }
        return message;
    },

    toJSON(message: GetAddressRequest): unknown {
        const obj: any = {};
        message.addressId !== undefined && (obj.addressId = message.addressId);
        return obj;
    },

    fromPartial(object: DeepPartial<GetAddressRequest>): GetAddressRequest {
        const message = { ...baseGetAddressRequest } as GetAddressRequest;
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = object.addressId;
        } else {
            message.addressId = '';
        }
        return message;
    },
};

const baseGetAddressByValueRequest: object = {};

export const GetAddressByValueRequest = {
    encode(
        message: GetAddressByValueRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.externalIpv4Address !== undefined) {
            writer.uint32(10).string(message.externalIpv4Address);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetAddressByValueRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetAddressByValueRequest,
        } as GetAddressByValueRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.externalIpv4Address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetAddressByValueRequest {
        const message = {
            ...baseGetAddressByValueRequest,
        } as GetAddressByValueRequest;
        if (
            object.externalIpv4Address !== undefined &&
            object.externalIpv4Address !== null
        ) {
            message.externalIpv4Address = String(object.externalIpv4Address);
        } else {
            message.externalIpv4Address = undefined;
        }
        return message;
    },

    toJSON(message: GetAddressByValueRequest): unknown {
        const obj: any = {};
        message.externalIpv4Address !== undefined &&
            (obj.externalIpv4Address = message.externalIpv4Address);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetAddressByValueRequest>
    ): GetAddressByValueRequest {
        const message = {
            ...baseGetAddressByValueRequest,
        } as GetAddressByValueRequest;
        if (
            object.externalIpv4Address !== undefined &&
            object.externalIpv4Address !== null
        ) {
            message.externalIpv4Address = object.externalIpv4Address;
        } else {
            message.externalIpv4Address = undefined;
        }
        return message;
    },
};

const baseListAddressesRequest: object = {
    folderId: '',
    pageSize: 0,
    pageToken: '',
    filter: '',
};

export const ListAddressesRequest = {
    encode(
        message: ListAddressesRequest,
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
    ): ListAddressesRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListAddressesRequest } as ListAddressesRequest;
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

    fromJSON(object: any): ListAddressesRequest {
        const message = { ...baseListAddressesRequest } as ListAddressesRequest;
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

    toJSON(message: ListAddressesRequest): unknown {
        const obj: any = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.filter !== undefined && (obj.filter = message.filter);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListAddressesRequest>
    ): ListAddressesRequest {
        const message = { ...baseListAddressesRequest } as ListAddressesRequest;
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

const baseListAddressesResponse: object = { nextPageToken: '' };

export const ListAddressesResponse = {
    encode(
        message: ListAddressesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.addresses) {
            Address.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListAddressesResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListAddressesResponse,
        } as ListAddressesResponse;
        message.addresses = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addresses.push(
                        Address.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListAddressesResponse {
        const message = {
            ...baseListAddressesResponse,
        } as ListAddressesResponse;
        message.addresses = [];
        if (object.addresses !== undefined && object.addresses !== null) {
            for (const e of object.addresses) {
                message.addresses.push(Address.fromJSON(e));
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

    toJSON(message: ListAddressesResponse): unknown {
        const obj: any = {};
        if (message.addresses) {
            obj.addresses = message.addresses.map((e) =>
                e ? Address.toJSON(e) : undefined
            );
        } else {
            obj.addresses = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListAddressesResponse>
    ): ListAddressesResponse {
        const message = {
            ...baseListAddressesResponse,
        } as ListAddressesResponse;
        message.addresses = [];
        if (object.addresses !== undefined && object.addresses !== null) {
            for (const e of object.addresses) {
                message.addresses.push(Address.fromPartial(e));
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

const baseCreateAddressRequest: object = {
    folderId: '',
    name: '',
    description: '',
};

export const CreateAddressRequest = {
    encode(
        message: CreateAddressRequest,
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
            CreateAddressRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(34).fork()
            ).ldelim();
        });
        if (message.externalIpv4AddressSpec !== undefined) {
            ExternalIpv4AddressSpec.encode(
                message.externalIpv4AddressSpec,
                writer.uint32(42).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateAddressRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateAddressRequest } as CreateAddressRequest;
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
                    const entry4 = CreateAddressRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.externalIpv4AddressSpec =
                        ExternalIpv4AddressSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateAddressRequest {
        const message = { ...baseCreateAddressRequest } as CreateAddressRequest;
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
        if (
            object.externalIpv4AddressSpec !== undefined &&
            object.externalIpv4AddressSpec !== null
        ) {
            message.externalIpv4AddressSpec = ExternalIpv4AddressSpec.fromJSON(
                object.externalIpv4AddressSpec
            );
        } else {
            message.externalIpv4AddressSpec = undefined;
        }
        return message;
    },

    toJSON(message: CreateAddressRequest): unknown {
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
        message.externalIpv4AddressSpec !== undefined &&
            (obj.externalIpv4AddressSpec = message.externalIpv4AddressSpec
                ? ExternalIpv4AddressSpec.toJSON(
                      message.externalIpv4AddressSpec
                  )
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateAddressRequest>
    ): CreateAddressRequest {
        const message = { ...baseCreateAddressRequest } as CreateAddressRequest;
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
        if (
            object.externalIpv4AddressSpec !== undefined &&
            object.externalIpv4AddressSpec !== null
        ) {
            message.externalIpv4AddressSpec =
                ExternalIpv4AddressSpec.fromPartial(
                    object.externalIpv4AddressSpec
                );
        } else {
            message.externalIpv4AddressSpec = undefined;
        }
        return message;
    },
};

const baseCreateAddressRequest_LabelsEntry: object = { key: '', value: '' };

export const CreateAddressRequest_LabelsEntry = {
    encode(
        message: CreateAddressRequest_LabelsEntry,
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
    ): CreateAddressRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateAddressRequest_LabelsEntry,
        } as CreateAddressRequest_LabelsEntry;
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

    fromJSON(object: any): CreateAddressRequest_LabelsEntry {
        const message = {
            ...baseCreateAddressRequest_LabelsEntry,
        } as CreateAddressRequest_LabelsEntry;
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

    toJSON(message: CreateAddressRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateAddressRequest_LabelsEntry>
    ): CreateAddressRequest_LabelsEntry {
        const message = {
            ...baseCreateAddressRequest_LabelsEntry,
        } as CreateAddressRequest_LabelsEntry;
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

const baseExternalIpv4AddressSpec: object = { address: '', zoneId: '' };

export const ExternalIpv4AddressSpec = {
    encode(
        message: ExternalIpv4AddressSpec,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.zoneId !== '') {
            writer.uint32(18).string(message.zoneId);
        }
        if (message.requirements !== undefined) {
            AddressRequirements.encode(
                message.requirements,
                writer.uint32(26).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ExternalIpv4AddressSpec {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseExternalIpv4AddressSpec,
        } as ExternalIpv4AddressSpec;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.zoneId = reader.string();
                    break;
                case 3:
                    message.requirements = AddressRequirements.decode(
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

    fromJSON(object: any): ExternalIpv4AddressSpec {
        const message = {
            ...baseExternalIpv4AddressSpec,
        } as ExternalIpv4AddressSpec;
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        } else {
            message.address = '';
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = String(object.zoneId);
        } else {
            message.zoneId = '';
        }
        if (object.requirements !== undefined && object.requirements !== null) {
            message.requirements = AddressRequirements.fromJSON(
                object.requirements
            );
        } else {
            message.requirements = undefined;
        }
        return message;
    },

    toJSON(message: ExternalIpv4AddressSpec): unknown {
        const obj: any = {};
        message.address !== undefined && (obj.address = message.address);
        message.zoneId !== undefined && (obj.zoneId = message.zoneId);
        message.requirements !== undefined &&
            (obj.requirements = message.requirements
                ? AddressRequirements.toJSON(message.requirements)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ExternalIpv4AddressSpec>
    ): ExternalIpv4AddressSpec {
        const message = {
            ...baseExternalIpv4AddressSpec,
        } as ExternalIpv4AddressSpec;
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        } else {
            message.address = '';
        }
        if (object.zoneId !== undefined && object.zoneId !== null) {
            message.zoneId = object.zoneId;
        } else {
            message.zoneId = '';
        }
        if (object.requirements !== undefined && object.requirements !== null) {
            message.requirements = AddressRequirements.fromPartial(
                object.requirements
            );
        } else {
            message.requirements = undefined;
        }
        return message;
    },
};

const baseCreateAddressMetadata: object = { addressId: '' };

export const CreateAddressMetadata = {
    encode(
        message: CreateAddressMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.addressId !== '') {
            writer.uint32(10).string(message.addressId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CreateAddressMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateAddressMetadata,
        } as CreateAddressMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateAddressMetadata {
        const message = {
            ...baseCreateAddressMetadata,
        } as CreateAddressMetadata;
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = String(object.addressId);
        } else {
            message.addressId = '';
        }
        return message;
    },

    toJSON(message: CreateAddressMetadata): unknown {
        const obj: any = {};
        message.addressId !== undefined && (obj.addressId = message.addressId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CreateAddressMetadata>
    ): CreateAddressMetadata {
        const message = {
            ...baseCreateAddressMetadata,
        } as CreateAddressMetadata;
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = object.addressId;
        } else {
            message.addressId = '';
        }
        return message;
    },
};

const baseUpdateAddressRequest: object = {
    addressId: '',
    name: '',
    description: '',
    reserved: false,
};

export const UpdateAddressRequest = {
    encode(
        message: UpdateAddressRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.addressId !== '') {
            writer.uint32(10).string(message.addressId);
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
            UpdateAddressRequest_LabelsEntry.encode(
                { key: key as any, value },
                writer.uint32(42).fork()
            ).ldelim();
        });
        if (message.reserved === true) {
            writer.uint32(48).bool(message.reserved);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateAddressRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateAddressRequest } as UpdateAddressRequest;
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
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
                    const entry5 = UpdateAddressRequest_LabelsEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.reserved = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateAddressRequest {
        const message = { ...baseUpdateAddressRequest } as UpdateAddressRequest;
        message.labels = {};
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = String(object.addressId);
        } else {
            message.addressId = '';
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
        if (object.reserved !== undefined && object.reserved !== null) {
            message.reserved = Boolean(object.reserved);
        } else {
            message.reserved = false;
        }
        return message;
    },

    toJSON(message: UpdateAddressRequest): unknown {
        const obj: any = {};
        message.addressId !== undefined && (obj.addressId = message.addressId);
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
        message.reserved !== undefined && (obj.reserved = message.reserved);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateAddressRequest>
    ): UpdateAddressRequest {
        const message = { ...baseUpdateAddressRequest } as UpdateAddressRequest;
        message.labels = {};
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = object.addressId;
        } else {
            message.addressId = '';
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
        if (object.reserved !== undefined && object.reserved !== null) {
            message.reserved = object.reserved;
        } else {
            message.reserved = false;
        }
        return message;
    },
};

const baseUpdateAddressRequest_LabelsEntry: object = { key: '', value: '' };

export const UpdateAddressRequest_LabelsEntry = {
    encode(
        message: UpdateAddressRequest_LabelsEntry,
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
    ): UpdateAddressRequest_LabelsEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateAddressRequest_LabelsEntry,
        } as UpdateAddressRequest_LabelsEntry;
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

    fromJSON(object: any): UpdateAddressRequest_LabelsEntry {
        const message = {
            ...baseUpdateAddressRequest_LabelsEntry,
        } as UpdateAddressRequest_LabelsEntry;
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

    toJSON(message: UpdateAddressRequest_LabelsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateAddressRequest_LabelsEntry>
    ): UpdateAddressRequest_LabelsEntry {
        const message = {
            ...baseUpdateAddressRequest_LabelsEntry,
        } as UpdateAddressRequest_LabelsEntry;
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

const baseUpdateAddressMetadata: object = { addressId: '' };

export const UpdateAddressMetadata = {
    encode(
        message: UpdateAddressMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.addressId !== '') {
            writer.uint32(10).string(message.addressId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateAddressMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateAddressMetadata,
        } as UpdateAddressMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateAddressMetadata {
        const message = {
            ...baseUpdateAddressMetadata,
        } as UpdateAddressMetadata;
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = String(object.addressId);
        } else {
            message.addressId = '';
        }
        return message;
    },

    toJSON(message: UpdateAddressMetadata): unknown {
        const obj: any = {};
        message.addressId !== undefined && (obj.addressId = message.addressId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<UpdateAddressMetadata>
    ): UpdateAddressMetadata {
        const message = {
            ...baseUpdateAddressMetadata,
        } as UpdateAddressMetadata;
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = object.addressId;
        } else {
            message.addressId = '';
        }
        return message;
    },
};

const baseDeleteAddressRequest: object = { addressId: '' };

export const DeleteAddressRequest = {
    encode(
        message: DeleteAddressRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.addressId !== '') {
            writer.uint32(10).string(message.addressId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteAddressRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeleteAddressRequest } as DeleteAddressRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteAddressRequest {
        const message = { ...baseDeleteAddressRequest } as DeleteAddressRequest;
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = String(object.addressId);
        } else {
            message.addressId = '';
        }
        return message;
    },

    toJSON(message: DeleteAddressRequest): unknown {
        const obj: any = {};
        message.addressId !== undefined && (obj.addressId = message.addressId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteAddressRequest>
    ): DeleteAddressRequest {
        const message = { ...baseDeleteAddressRequest } as DeleteAddressRequest;
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = object.addressId;
        } else {
            message.addressId = '';
        }
        return message;
    },
};

const baseDeleteAddressMetadata: object = { addressId: '' };

export const DeleteAddressMetadata = {
    encode(
        message: DeleteAddressMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.addressId !== '') {
            writer.uint32(10).string(message.addressId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DeleteAddressMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteAddressMetadata,
        } as DeleteAddressMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DeleteAddressMetadata {
        const message = {
            ...baseDeleteAddressMetadata,
        } as DeleteAddressMetadata;
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = String(object.addressId);
        } else {
            message.addressId = '';
        }
        return message;
    },

    toJSON(message: DeleteAddressMetadata): unknown {
        const obj: any = {};
        message.addressId !== undefined && (obj.addressId = message.addressId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<DeleteAddressMetadata>
    ): DeleteAddressMetadata {
        const message = {
            ...baseDeleteAddressMetadata,
        } as DeleteAddressMetadata;
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = object.addressId;
        } else {
            message.addressId = '';
        }
        return message;
    },
};

const baseListAddressOperationsRequest: object = {
    addressId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListAddressOperationsRequest = {
    encode(
        message: ListAddressOperationsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.addressId !== '') {
            writer.uint32(10).string(message.addressId);
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
    ): ListAddressOperationsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListAddressOperationsRequest,
        } as ListAddressOperationsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
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

    fromJSON(object: any): ListAddressOperationsRequest {
        const message = {
            ...baseListAddressOperationsRequest,
        } as ListAddressOperationsRequest;
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = String(object.addressId);
        } else {
            message.addressId = '';
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

    toJSON(message: ListAddressOperationsRequest): unknown {
        const obj: any = {};
        message.addressId !== undefined && (obj.addressId = message.addressId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListAddressOperationsRequest>
    ): ListAddressOperationsRequest {
        const message = {
            ...baseListAddressOperationsRequest,
        } as ListAddressOperationsRequest;
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = object.addressId;
        } else {
            message.addressId = '';
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

const baseListAddressOperationsResponse: object = { nextPageToken: '' };

export const ListAddressOperationsResponse = {
    encode(
        message: ListAddressOperationsResponse,
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
    ): ListAddressOperationsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListAddressOperationsResponse,
        } as ListAddressOperationsResponse;
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

    fromJSON(object: any): ListAddressOperationsResponse {
        const message = {
            ...baseListAddressOperationsResponse,
        } as ListAddressOperationsResponse;
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

    toJSON(message: ListAddressOperationsResponse): unknown {
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
        object: DeepPartial<ListAddressOperationsResponse>
    ): ListAddressOperationsResponse {
        const message = {
            ...baseListAddressOperationsResponse,
        } as ListAddressOperationsResponse;
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

const baseMoveAddressRequest: object = {
    addressId: '',
    destinationFolderId: '',
};

export const MoveAddressRequest = {
    encode(
        message: MoveAddressRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.addressId !== '') {
            writer.uint32(10).string(message.addressId);
        }
        if (message.destinationFolderId !== '') {
            writer.uint32(18).string(message.destinationFolderId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): MoveAddressRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMoveAddressRequest } as MoveAddressRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
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

    fromJSON(object: any): MoveAddressRequest {
        const message = { ...baseMoveAddressRequest } as MoveAddressRequest;
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = String(object.addressId);
        } else {
            message.addressId = '';
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

    toJSON(message: MoveAddressRequest): unknown {
        const obj: any = {};
        message.addressId !== undefined && (obj.addressId = message.addressId);
        message.destinationFolderId !== undefined &&
            (obj.destinationFolderId = message.destinationFolderId);
        return obj;
    },

    fromPartial(object: DeepPartial<MoveAddressRequest>): MoveAddressRequest {
        const message = { ...baseMoveAddressRequest } as MoveAddressRequest;
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = object.addressId;
        } else {
            message.addressId = '';
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

const baseMoveAddressMetadata: object = { addressId: '' };

export const MoveAddressMetadata = {
    encode(
        message: MoveAddressMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.addressId !== '') {
            writer.uint32(10).string(message.addressId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): MoveAddressMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMoveAddressMetadata } as MoveAddressMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MoveAddressMetadata {
        const message = { ...baseMoveAddressMetadata } as MoveAddressMetadata;
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = String(object.addressId);
        } else {
            message.addressId = '';
        }
        return message;
    },

    toJSON(message: MoveAddressMetadata): unknown {
        const obj: any = {};
        message.addressId !== undefined && (obj.addressId = message.addressId);
        return obj;
    },

    fromPartial(object: DeepPartial<MoveAddressMetadata>): MoveAddressMetadata {
        const message = { ...baseMoveAddressMetadata } as MoveAddressMetadata;
        if (object.addressId !== undefined && object.addressId !== null) {
            message.addressId = object.addressId;
        } else {
            message.addressId = '';
        }
        return message;
    },
};

/** A set of methods for managing Address resources. */
export const AddressServiceService = {
    /**
     * Returns the specified Address resource.
     *
     * To get the list of all available Address resources, make a [List] request.
     */
    get: {
        path: '/yandex.cloud.vpc.v1.AddressService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetAddressRequest) =>
            Buffer.from(GetAddressRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => GetAddressRequest.decode(value),
        responseSerialize: (value: Address) =>
            Buffer.from(Address.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Address.decode(value),
    },
    /**
     * Returns the specified Address resource by a given value.
     *
     * To get the list of all available Address resources, make a [List] request.
     */
    getByValue: {
        path: '/yandex.cloud.vpc.v1.AddressService/GetByValue',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetAddressByValueRequest) =>
            Buffer.from(GetAddressByValueRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetAddressByValueRequest.decode(value),
        responseSerialize: (value: Address) =>
            Buffer.from(Address.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Address.decode(value),
    },
    /** Retrieves the list of Address resources in the specified folder. */
    list: {
        path: '/yandex.cloud.vpc.v1.AddressService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAddressesRequest) =>
            Buffer.from(ListAddressesRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListAddressesRequest.decode(value),
        responseSerialize: (value: ListAddressesResponse) =>
            Buffer.from(ListAddressesResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListAddressesResponse.decode(value),
    },
    /** Creates an address in the specified folder and network. */
    create: {
        path: '/yandex.cloud.vpc.v1.AddressService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: CreateAddressRequest) =>
            Buffer.from(CreateAddressRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            CreateAddressRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Updates the specified address. */
    update: {
        path: '/yandex.cloud.vpc.v1.AddressService/Update',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAddressRequest) =>
            Buffer.from(UpdateAddressRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateAddressRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Deletes the specified address. */
    delete: {
        path: '/yandex.cloud.vpc.v1.AddressService/Delete',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: DeleteAddressRequest) =>
            Buffer.from(DeleteAddressRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            DeleteAddressRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** List operations for the specified address. */
    listOperations: {
        path: '/yandex.cloud.vpc.v1.AddressService/ListOperations',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAddressOperationsRequest) =>
            Buffer.from(ListAddressOperationsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListAddressOperationsRequest.decode(value),
        responseSerialize: (value: ListAddressOperationsResponse) =>
            Buffer.from(ListAddressOperationsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListAddressOperationsResponse.decode(value),
    },
    /** Move an address to another folder */
    move: {
        path: '/yandex.cloud.vpc.v1.AddressService/Move',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: MoveAddressRequest) =>
            Buffer.from(MoveAddressRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) => MoveAddressRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface AddressServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Address resource.
     *
     * To get the list of all available Address resources, make a [List] request.
     */
    get: handleUnaryCall<GetAddressRequest, Address>;
    /**
     * Returns the specified Address resource by a given value.
     *
     * To get the list of all available Address resources, make a [List] request.
     */
    getByValue: handleUnaryCall<GetAddressByValueRequest, Address>;
    /** Retrieves the list of Address resources in the specified folder. */
    list: handleUnaryCall<ListAddressesRequest, ListAddressesResponse>;
    /** Creates an address in the specified folder and network. */
    create: handleUnaryCall<CreateAddressRequest, Operation>;
    /** Updates the specified address. */
    update: handleUnaryCall<UpdateAddressRequest, Operation>;
    /** Deletes the specified address. */
    delete: handleUnaryCall<DeleteAddressRequest, Operation>;
    /** List operations for the specified address. */
    listOperations: handleUnaryCall<
        ListAddressOperationsRequest,
        ListAddressOperationsResponse
    >;
    /** Move an address to another folder */
    move: handleUnaryCall<MoveAddressRequest, Operation>;
}

export interface AddressServiceClient extends Client {
    /**
     * Returns the specified Address resource.
     *
     * To get the list of all available Address resources, make a [List] request.
     */
    get(
        request: GetAddressRequest,
        callback: (error: ServiceError | null, response: Address) => void
    ): ClientUnaryCall;
    get(
        request: GetAddressRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Address) => void
    ): ClientUnaryCall;
    get(
        request: GetAddressRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Address) => void
    ): ClientUnaryCall;
    /**
     * Returns the specified Address resource by a given value.
     *
     * To get the list of all available Address resources, make a [List] request.
     */
    getByValue(
        request: GetAddressByValueRequest,
        callback: (error: ServiceError | null, response: Address) => void
    ): ClientUnaryCall;
    getByValue(
        request: GetAddressByValueRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Address) => void
    ): ClientUnaryCall;
    getByValue(
        request: GetAddressByValueRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Address) => void
    ): ClientUnaryCall;
    /** Retrieves the list of Address resources in the specified folder. */
    list(
        request: ListAddressesRequest,
        callback: (
            error: ServiceError | null,
            response: ListAddressesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListAddressesRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListAddressesResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListAddressesRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListAddressesResponse
        ) => void
    ): ClientUnaryCall;
    /** Creates an address in the specified folder and network. */
    create(
        request: CreateAddressRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateAddressRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    create(
        request: CreateAddressRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Updates the specified address. */
    update(
        request: UpdateAddressRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateAddressRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    update(
        request: UpdateAddressRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Deletes the specified address. */
    delete(
        request: DeleteAddressRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteAddressRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    delete(
        request: DeleteAddressRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** List operations for the specified address. */
    listOperations(
        request: ListAddressOperationsRequest,
        callback: (
            error: ServiceError | null,
            response: ListAddressOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListAddressOperationsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListAddressOperationsResponse
        ) => void
    ): ClientUnaryCall;
    listOperations(
        request: ListAddressOperationsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListAddressOperationsResponse
        ) => void
    ): ClientUnaryCall;
    /** Move an address to another folder */
    move(
        request: MoveAddressRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    move(
        request: MoveAddressRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    move(
        request: MoveAddressRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
}

export const AddressServiceClient = makeGenericClientConstructor(
    AddressServiceService,
    'yandex.cloud.vpc.v1.AddressService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): AddressServiceClient;
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
