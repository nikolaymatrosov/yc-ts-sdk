/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { Address, AddressRequirements } from '../../../../yandex/cloud/vpc/v1/address';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.vpc.v1";
export interface GetAddressRequest {
    $type: 'yandex.cloud.vpc.v1.GetAddressRequest';
    /**
     * ID of the Address resource to return.
     *
     * To get Address resource ID make a [AddressService.List] request.
     */
    addressId: string;
}
export interface GetAddressByValueRequest {
    $type: 'yandex.cloud.vpc.v1.GetAddressByValueRequest';
    externalIpv4Address: string | undefined;
}
export interface ListAddressesRequest {
    $type: 'yandex.cloud.vpc.v1.ListAddressesRequest';
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
    $type: 'yandex.cloud.vpc.v1.ListAddressesResponse';
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
    $type: 'yandex.cloud.vpc.v1.CreateAddressRequest';
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
    labels: {
        [key: string]: string;
    };
    externalIpv4AddressSpec: ExternalIpv4AddressSpec | undefined;
}
export interface CreateAddressRequest_LabelsEntry {
    $type: 'yandex.cloud.vpc.v1.CreateAddressRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface ExternalIpv4AddressSpec {
    $type: 'yandex.cloud.vpc.v1.ExternalIpv4AddressSpec';
    /** Value of address. */
    address: string;
    /** Availability zone from which the address will be allocated. */
    zoneId: string;
    /** Parameters of the allocated address, for example DDoS Protection. */
    requirements: AddressRequirements | undefined;
}
export interface CreateAddressMetadata {
    $type: 'yandex.cloud.vpc.v1.CreateAddressMetadata';
    /** ID of the address that is being created. */
    addressId: string;
}
export interface UpdateAddressRequest {
    $type: 'yandex.cloud.vpc.v1.UpdateAddressRequest';
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
    labels: {
        [key: string]: string;
    };
    /** Specifies if address is reserved or not. */
    reserved: boolean;
}
export interface UpdateAddressRequest_LabelsEntry {
    $type: 'yandex.cloud.vpc.v1.UpdateAddressRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface UpdateAddressMetadata {
    $type: 'yandex.cloud.vpc.v1.UpdateAddressMetadata';
    /** ID of the Address that is being updated. */
    addressId: string;
}
export interface DeleteAddressRequest {
    $type: 'yandex.cloud.vpc.v1.DeleteAddressRequest';
    /**
     * ID of the address to delete.
     *
     * To get a address ID make a [AddressService.List] request.
     */
    addressId: string;
}
export interface DeleteAddressMetadata {
    $type: 'yandex.cloud.vpc.v1.DeleteAddressMetadata';
    /** ID of the address that is being deleted. */
    addressId: string;
}
export interface ListAddressOperationsRequest {
    $type: 'yandex.cloud.vpc.v1.ListAddressOperationsRequest';
    /**
     * ID of the address to list operations for.
     *
     * To get a address ID make a [AddressService.List] request.
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
    $type: 'yandex.cloud.vpc.v1.ListAddressOperationsResponse';
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
    $type: 'yandex.cloud.vpc.v1.MoveAddressRequest';
    addressId: string;
    destinationFolderId: string;
}
export interface MoveAddressMetadata {
    $type: 'yandex.cloud.vpc.v1.MoveAddressMetadata';
    addressId: string;
}
export declare const GetAddressRequest: {
    $type: "yandex.cloud.vpc.v1.GetAddressRequest";
    encode(message: GetAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetAddressRequest;
    fromJSON(object: any): GetAddressRequest;
    toJSON(message: GetAddressRequest): unknown;
    fromPartial(object: DeepPartial<GetAddressRequest>): GetAddressRequest;
};
export declare const GetAddressByValueRequest: {
    $type: "yandex.cloud.vpc.v1.GetAddressByValueRequest";
    encode(message: GetAddressByValueRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetAddressByValueRequest;
    fromJSON(object: any): GetAddressByValueRequest;
    toJSON(message: GetAddressByValueRequest): unknown;
    fromPartial(object: DeepPartial<GetAddressByValueRequest>): GetAddressByValueRequest;
};
export declare const ListAddressesRequest: {
    $type: "yandex.cloud.vpc.v1.ListAddressesRequest";
    encode(message: ListAddressesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAddressesRequest;
    fromJSON(object: any): ListAddressesRequest;
    toJSON(message: ListAddressesRequest): unknown;
    fromPartial(object: DeepPartial<ListAddressesRequest>): ListAddressesRequest;
};
export declare const ListAddressesResponse: {
    $type: "yandex.cloud.vpc.v1.ListAddressesResponse";
    encode(message: ListAddressesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAddressesResponse;
    fromJSON(object: any): ListAddressesResponse;
    toJSON(message: ListAddressesResponse): unknown;
    fromPartial(object: DeepPartial<ListAddressesResponse>): ListAddressesResponse;
};
export declare const CreateAddressRequest: {
    $type: "yandex.cloud.vpc.v1.CreateAddressRequest";
    encode(message: CreateAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateAddressRequest;
    fromJSON(object: any): CreateAddressRequest;
    toJSON(message: CreateAddressRequest): unknown;
    fromPartial(object: DeepPartial<CreateAddressRequest>): CreateAddressRequest;
};
export declare const CreateAddressRequest_LabelsEntry: {
    $type: "yandex.cloud.vpc.v1.CreateAddressRequest.LabelsEntry";
    encode(message: CreateAddressRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateAddressRequest_LabelsEntry;
    fromJSON(object: any): CreateAddressRequest_LabelsEntry;
    toJSON(message: CreateAddressRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateAddressRequest_LabelsEntry>): CreateAddressRequest_LabelsEntry;
};
export declare const ExternalIpv4AddressSpec: {
    $type: "yandex.cloud.vpc.v1.ExternalIpv4AddressSpec";
    encode(message: ExternalIpv4AddressSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalIpv4AddressSpec;
    fromJSON(object: any): ExternalIpv4AddressSpec;
    toJSON(message: ExternalIpv4AddressSpec): unknown;
    fromPartial(object: DeepPartial<ExternalIpv4AddressSpec>): ExternalIpv4AddressSpec;
};
export declare const CreateAddressMetadata: {
    $type: "yandex.cloud.vpc.v1.CreateAddressMetadata";
    encode(message: CreateAddressMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateAddressMetadata;
    fromJSON(object: any): CreateAddressMetadata;
    toJSON(message: CreateAddressMetadata): unknown;
    fromPartial(object: DeepPartial<CreateAddressMetadata>): CreateAddressMetadata;
};
export declare const UpdateAddressRequest: {
    $type: "yandex.cloud.vpc.v1.UpdateAddressRequest";
    encode(message: UpdateAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateAddressRequest;
    fromJSON(object: any): UpdateAddressRequest;
    toJSON(message: UpdateAddressRequest): unknown;
    fromPartial(object: DeepPartial<UpdateAddressRequest>): UpdateAddressRequest;
};
export declare const UpdateAddressRequest_LabelsEntry: {
    $type: "yandex.cloud.vpc.v1.UpdateAddressRequest.LabelsEntry";
    encode(message: UpdateAddressRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateAddressRequest_LabelsEntry;
    fromJSON(object: any): UpdateAddressRequest_LabelsEntry;
    toJSON(message: UpdateAddressRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateAddressRequest_LabelsEntry>): UpdateAddressRequest_LabelsEntry;
};
export declare const UpdateAddressMetadata: {
    $type: "yandex.cloud.vpc.v1.UpdateAddressMetadata";
    encode(message: UpdateAddressMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateAddressMetadata;
    fromJSON(object: any): UpdateAddressMetadata;
    toJSON(message: UpdateAddressMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateAddressMetadata>): UpdateAddressMetadata;
};
export declare const DeleteAddressRequest: {
    $type: "yandex.cloud.vpc.v1.DeleteAddressRequest";
    encode(message: DeleteAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteAddressRequest;
    fromJSON(object: any): DeleteAddressRequest;
    toJSON(message: DeleteAddressRequest): unknown;
    fromPartial(object: DeepPartial<DeleteAddressRequest>): DeleteAddressRequest;
};
export declare const DeleteAddressMetadata: {
    $type: "yandex.cloud.vpc.v1.DeleteAddressMetadata";
    encode(message: DeleteAddressMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteAddressMetadata;
    fromJSON(object: any): DeleteAddressMetadata;
    toJSON(message: DeleteAddressMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteAddressMetadata>): DeleteAddressMetadata;
};
export declare const ListAddressOperationsRequest: {
    $type: "yandex.cloud.vpc.v1.ListAddressOperationsRequest";
    encode(message: ListAddressOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAddressOperationsRequest;
    fromJSON(object: any): ListAddressOperationsRequest;
    toJSON(message: ListAddressOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListAddressOperationsRequest>): ListAddressOperationsRequest;
};
export declare const ListAddressOperationsResponse: {
    $type: "yandex.cloud.vpc.v1.ListAddressOperationsResponse";
    encode(message: ListAddressOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAddressOperationsResponse;
    fromJSON(object: any): ListAddressOperationsResponse;
    toJSON(message: ListAddressOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListAddressOperationsResponse>): ListAddressOperationsResponse;
};
export declare const MoveAddressRequest: {
    $type: "yandex.cloud.vpc.v1.MoveAddressRequest";
    encode(message: MoveAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveAddressRequest;
    fromJSON(object: any): MoveAddressRequest;
    toJSON(message: MoveAddressRequest): unknown;
    fromPartial(object: DeepPartial<MoveAddressRequest>): MoveAddressRequest;
};
export declare const MoveAddressMetadata: {
    $type: "yandex.cloud.vpc.v1.MoveAddressMetadata";
    encode(message: MoveAddressMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveAddressMetadata;
    fromJSON(object: any): MoveAddressMetadata;
    toJSON(message: MoveAddressMetadata): unknown;
    fromPartial(object: DeepPartial<MoveAddressMetadata>): MoveAddressMetadata;
};
/** A set of methods for managing Address resources. */
export declare const AddressServiceService: {
    /**
     * Returns the specified Address resource.
     *
     * To get the list of all available Address resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.vpc.v1.AddressService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetAddressRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetAddressRequest;
        readonly responseSerialize: (value: Address) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Address;
    };
    /**
     * Returns the specified Address resource by a given value.
     *
     * To get the list of all available Address resources, make a [List] request.
     */
    readonly getByValue: {
        readonly path: "/yandex.cloud.vpc.v1.AddressService/GetByValue";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetAddressByValueRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetAddressByValueRequest;
        readonly responseSerialize: (value: Address) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Address;
    };
    /** Retrieves the list of Address resources in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.vpc.v1.AddressService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAddressesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAddressesRequest;
        readonly responseSerialize: (value: ListAddressesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAddressesResponse;
    };
    /** Creates an address in the specified folder and network. */
    readonly create: {
        readonly path: "/yandex.cloud.vpc.v1.AddressService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateAddressRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateAddressRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified address. */
    readonly update: {
        readonly path: "/yandex.cloud.vpc.v1.AddressService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAddressRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAddressRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified address. */
    readonly delete: {
        readonly path: "/yandex.cloud.vpc.v1.AddressService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteAddressRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteAddressRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** List operations for the specified address. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.vpc.v1.AddressService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAddressOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAddressOperationsRequest;
        readonly responseSerialize: (value: ListAddressOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAddressOperationsResponse;
    };
    /** Move an address to another folder */
    readonly move: {
        readonly path: "/yandex.cloud.vpc.v1.AddressService/Move";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MoveAddressRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MoveAddressRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
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
    listOperations: handleUnaryCall<ListAddressOperationsRequest, ListAddressOperationsResponse>;
    /** Move an address to another folder */
    move: handleUnaryCall<MoveAddressRequest, Operation>;
}
export interface AddressServiceClient extends Client {
    /**
     * Returns the specified Address resource.
     *
     * To get the list of all available Address resources, make a [List] request.
     */
    get(request: GetAddressRequest, callback: (error: ServiceError | null, response: Address) => void): ClientUnaryCall;
    get(request: GetAddressRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Address) => void): ClientUnaryCall;
    get(request: GetAddressRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Address) => void): ClientUnaryCall;
    /**
     * Returns the specified Address resource by a given value.
     *
     * To get the list of all available Address resources, make a [List] request.
     */
    getByValue(request: GetAddressByValueRequest, callback: (error: ServiceError | null, response: Address) => void): ClientUnaryCall;
    getByValue(request: GetAddressByValueRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Address) => void): ClientUnaryCall;
    getByValue(request: GetAddressByValueRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Address) => void): ClientUnaryCall;
    /** Retrieves the list of Address resources in the specified folder. */
    list(request: ListAddressesRequest, callback: (error: ServiceError | null, response: ListAddressesResponse) => void): ClientUnaryCall;
    list(request: ListAddressesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAddressesResponse) => void): ClientUnaryCall;
    list(request: ListAddressesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAddressesResponse) => void): ClientUnaryCall;
    /** Creates an address in the specified folder and network. */
    create(request: CreateAddressRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateAddressRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateAddressRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified address. */
    update(request: UpdateAddressRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateAddressRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateAddressRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified address. */
    delete(request: DeleteAddressRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteAddressRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteAddressRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** List operations for the specified address. */
    listOperations(request: ListAddressOperationsRequest, callback: (error: ServiceError | null, response: ListAddressOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListAddressOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAddressOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListAddressOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAddressOperationsResponse) => void): ClientUnaryCall;
    /** Move an address to another folder */
    move(request: MoveAddressRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveAddressRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveAddressRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const AddressServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => AddressServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
