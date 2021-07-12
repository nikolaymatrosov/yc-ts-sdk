/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { Network } from '../../../../yandex/cloud/vpc/v1/network';
import { Subnet } from '../../../../yandex/cloud/vpc/v1/subnet';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.vpc.v1";
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
    labels: {
        [key: string]: string;
    };
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
    labels: {
        [key: string]: string;
    };
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
export declare const GetNetworkRequest: {
    encode(message: GetNetworkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetNetworkRequest;
    fromJSON(object: any): GetNetworkRequest;
    toJSON(message: GetNetworkRequest): unknown;
    fromPartial(object: DeepPartial<GetNetworkRequest>): GetNetworkRequest;
};
export declare const ListNetworksRequest: {
    encode(message: ListNetworksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNetworksRequest;
    fromJSON(object: any): ListNetworksRequest;
    toJSON(message: ListNetworksRequest): unknown;
    fromPartial(object: DeepPartial<ListNetworksRequest>): ListNetworksRequest;
};
export declare const ListNetworksResponse: {
    encode(message: ListNetworksResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNetworksResponse;
    fromJSON(object: any): ListNetworksResponse;
    toJSON(message: ListNetworksResponse): unknown;
    fromPartial(object: DeepPartial<ListNetworksResponse>): ListNetworksResponse;
};
export declare const CreateNetworkRequest: {
    encode(message: CreateNetworkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateNetworkRequest;
    fromJSON(object: any): CreateNetworkRequest;
    toJSON(message: CreateNetworkRequest): unknown;
    fromPartial(object: DeepPartial<CreateNetworkRequest>): CreateNetworkRequest;
};
export declare const CreateNetworkRequest_LabelsEntry: {
    encode(message: CreateNetworkRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateNetworkRequest_LabelsEntry;
    fromJSON(object: any): CreateNetworkRequest_LabelsEntry;
    toJSON(message: CreateNetworkRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateNetworkRequest_LabelsEntry>): CreateNetworkRequest_LabelsEntry;
};
export declare const CreateNetworkMetadata: {
    encode(message: CreateNetworkMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateNetworkMetadata;
    fromJSON(object: any): CreateNetworkMetadata;
    toJSON(message: CreateNetworkMetadata): unknown;
    fromPartial(object: DeepPartial<CreateNetworkMetadata>): CreateNetworkMetadata;
};
export declare const UpdateNetworkRequest: {
    encode(message: UpdateNetworkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateNetworkRequest;
    fromJSON(object: any): UpdateNetworkRequest;
    toJSON(message: UpdateNetworkRequest): unknown;
    fromPartial(object: DeepPartial<UpdateNetworkRequest>): UpdateNetworkRequest;
};
export declare const UpdateNetworkRequest_LabelsEntry: {
    encode(message: UpdateNetworkRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateNetworkRequest_LabelsEntry;
    fromJSON(object: any): UpdateNetworkRequest_LabelsEntry;
    toJSON(message: UpdateNetworkRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateNetworkRequest_LabelsEntry>): UpdateNetworkRequest_LabelsEntry;
};
export declare const UpdateNetworkMetadata: {
    encode(message: UpdateNetworkMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateNetworkMetadata;
    fromJSON(object: any): UpdateNetworkMetadata;
    toJSON(message: UpdateNetworkMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateNetworkMetadata>): UpdateNetworkMetadata;
};
export declare const DeleteNetworkRequest: {
    encode(message: DeleteNetworkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteNetworkRequest;
    fromJSON(object: any): DeleteNetworkRequest;
    toJSON(message: DeleteNetworkRequest): unknown;
    fromPartial(object: DeepPartial<DeleteNetworkRequest>): DeleteNetworkRequest;
};
export declare const DeleteNetworkMetadata: {
    encode(message: DeleteNetworkMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteNetworkMetadata;
    fromJSON(object: any): DeleteNetworkMetadata;
    toJSON(message: DeleteNetworkMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteNetworkMetadata>): DeleteNetworkMetadata;
};
export declare const ListNetworkSubnetsRequest: {
    encode(message: ListNetworkSubnetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNetworkSubnetsRequest;
    fromJSON(object: any): ListNetworkSubnetsRequest;
    toJSON(message: ListNetworkSubnetsRequest): unknown;
    fromPartial(object: DeepPartial<ListNetworkSubnetsRequest>): ListNetworkSubnetsRequest;
};
export declare const ListNetworkSubnetsResponse: {
    encode(message: ListNetworkSubnetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNetworkSubnetsResponse;
    fromJSON(object: any): ListNetworkSubnetsResponse;
    toJSON(message: ListNetworkSubnetsResponse): unknown;
    fromPartial(object: DeepPartial<ListNetworkSubnetsResponse>): ListNetworkSubnetsResponse;
};
export declare const ListNetworkOperationsRequest: {
    encode(message: ListNetworkOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNetworkOperationsRequest;
    fromJSON(object: any): ListNetworkOperationsRequest;
    toJSON(message: ListNetworkOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListNetworkOperationsRequest>): ListNetworkOperationsRequest;
};
export declare const ListNetworkOperationsResponse: {
    encode(message: ListNetworkOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNetworkOperationsResponse;
    fromJSON(object: any): ListNetworkOperationsResponse;
    toJSON(message: ListNetworkOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListNetworkOperationsResponse>): ListNetworkOperationsResponse;
};
export declare const MoveNetworkRequest: {
    encode(message: MoveNetworkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveNetworkRequest;
    fromJSON(object: any): MoveNetworkRequest;
    toJSON(message: MoveNetworkRequest): unknown;
    fromPartial(object: DeepPartial<MoveNetworkRequest>): MoveNetworkRequest;
};
export declare const MoveNetworkMetadata: {
    encode(message: MoveNetworkMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveNetworkMetadata;
    fromJSON(object: any): MoveNetworkMetadata;
    toJSON(message: MoveNetworkMetadata): unknown;
    fromPartial(object: DeepPartial<MoveNetworkMetadata>): MoveNetworkMetadata;
};
/** A set of methods for managing Network resources. */
export declare const NetworkServiceService: {
    /**
     * Returns the specified Network resource.
     *
     * Get the list of available Network resources by making a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.vpc.v1.NetworkService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetNetworkRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetNetworkRequest;
        readonly responseSerialize: (value: Network) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Network;
    };
    /** Retrieves the list of Network resources in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.vpc.v1.NetworkService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListNetworksRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListNetworksRequest;
        readonly responseSerialize: (value: ListNetworksResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListNetworksResponse;
    };
    /**
     * Creates a network in the specified folder using the data specified in the request.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    readonly create: {
        readonly path: "/yandex.cloud.vpc.v1.NetworkService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateNetworkRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateNetworkRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Updates the specified network.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    readonly update: {
        readonly path: "/yandex.cloud.vpc.v1.NetworkService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateNetworkRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateNetworkRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified network. */
    readonly delete: {
        readonly path: "/yandex.cloud.vpc.v1.NetworkService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteNetworkRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteNetworkRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists subnets from the specified network. */
    readonly listSubnets: {
        readonly path: "/yandex.cloud.vpc.v1.NetworkService/ListSubnets";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListNetworkSubnetsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListNetworkSubnetsRequest;
        readonly responseSerialize: (value: ListNetworkSubnetsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListNetworkSubnetsResponse;
    };
    /** Lists operations for the specified network. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.vpc.v1.NetworkService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListNetworkOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListNetworkOperationsRequest;
        readonly responseSerialize: (value: ListNetworkOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListNetworkOperationsResponse;
    };
    /** Move network to another folder. */
    readonly move: {
        readonly path: "/yandex.cloud.vpc.v1.NetworkService/Move";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MoveNetworkRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MoveNetworkRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
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
    listSubnets: handleUnaryCall<ListNetworkSubnetsRequest, ListNetworkSubnetsResponse>;
    /** Lists operations for the specified network. */
    listOperations: handleUnaryCall<ListNetworkOperationsRequest, ListNetworkOperationsResponse>;
    /** Move network to another folder. */
    move: handleUnaryCall<MoveNetworkRequest, Operation>;
}
export interface NetworkServiceClient extends Client {
    /**
     * Returns the specified Network resource.
     *
     * Get the list of available Network resources by making a [List] request.
     */
    get(request: GetNetworkRequest, callback: (error: ServiceError | null, response: Network) => void): ClientUnaryCall;
    get(request: GetNetworkRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Network) => void): ClientUnaryCall;
    get(request: GetNetworkRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Network) => void): ClientUnaryCall;
    /** Retrieves the list of Network resources in the specified folder. */
    list(request: ListNetworksRequest, callback: (error: ServiceError | null, response: ListNetworksResponse) => void): ClientUnaryCall;
    list(request: ListNetworksRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListNetworksResponse) => void): ClientUnaryCall;
    list(request: ListNetworksRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListNetworksResponse) => void): ClientUnaryCall;
    /**
     * Creates a network in the specified folder using the data specified in the request.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create(request: CreateNetworkRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateNetworkRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateNetworkRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Updates the specified network.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update(request: UpdateNetworkRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateNetworkRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateNetworkRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified network. */
    delete(request: DeleteNetworkRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteNetworkRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteNetworkRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists subnets from the specified network. */
    listSubnets(request: ListNetworkSubnetsRequest, callback: (error: ServiceError | null, response: ListNetworkSubnetsResponse) => void): ClientUnaryCall;
    listSubnets(request: ListNetworkSubnetsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListNetworkSubnetsResponse) => void): ClientUnaryCall;
    listSubnets(request: ListNetworkSubnetsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListNetworkSubnetsResponse) => void): ClientUnaryCall;
    /** Lists operations for the specified network. */
    listOperations(request: ListNetworkOperationsRequest, callback: (error: ServiceError | null, response: ListNetworkOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListNetworkOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListNetworkOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListNetworkOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListNetworkOperationsResponse) => void): ClientUnaryCall;
    /** Move network to another folder. */
    move(request: MoveNetworkRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveNetworkRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveNetworkRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const NetworkServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => NetworkServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
