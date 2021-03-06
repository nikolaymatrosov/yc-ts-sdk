/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { Network } from '../../../../yandex/cloud/vpc/v1/network';
import { RouteTable } from '../../../../yandex/cloud/vpc/v1/route_table';
import { SecurityGroup } from '../../../../yandex/cloud/vpc/v1/security_group';
import { Subnet } from '../../../../yandex/cloud/vpc/v1/subnet';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.vpc.v1";
export interface GetNetworkRequest {
    $type: 'yandex.cloud.vpc.v1.GetNetworkRequest';
    /**
     * ID of the Network resource to return.
     * To get the network ID, use a [NetworkService.List] request.
     */
    networkId: string;
}
export interface ListNetworksRequest {
    $type: 'yandex.cloud.vpc.v1.ListNetworksRequest';
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
    $type: 'yandex.cloud.vpc.v1.ListNetworksResponse';
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
    $type: 'yandex.cloud.vpc.v1.CreateNetworkRequest';
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
    $type: 'yandex.cloud.vpc.v1.CreateNetworkRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface CreateNetworkMetadata {
    $type: 'yandex.cloud.vpc.v1.CreateNetworkMetadata';
    /** ID of the Network that is being created. */
    networkId: string;
}
export interface UpdateNetworkRequest {
    $type: 'yandex.cloud.vpc.v1.UpdateNetworkRequest';
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
    $type: 'yandex.cloud.vpc.v1.UpdateNetworkRequest.LabelsEntry';
    key: string;
    value: string;
}
export interface UpdateNetworkMetadata {
    $type: 'yandex.cloud.vpc.v1.UpdateNetworkMetadata';
    /** ID of the Network resource that is being updated. */
    networkId: string;
}
export interface DeleteNetworkRequest {
    $type: 'yandex.cloud.vpc.v1.DeleteNetworkRequest';
    /**
     * ID of the Network resource to update.
     * To get the network ID, use a [NetworkService.List] request.
     */
    networkId: string;
}
export interface DeleteNetworkMetadata {
    $type: 'yandex.cloud.vpc.v1.DeleteNetworkMetadata';
    /** ID of the network that is being deleted. */
    networkId: string;
}
export interface ListNetworkSubnetsRequest {
    $type: 'yandex.cloud.vpc.v1.ListNetworkSubnetsRequest';
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
    $type: 'yandex.cloud.vpc.v1.ListNetworkSubnetsResponse';
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
export interface ListNetworkSecurityGroupsRequest {
    $type: 'yandex.cloud.vpc.v1.ListNetworkSecurityGroupsRequest';
    /** ID of the Network resource to list security groups for. */
    networkId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListNetworkSecurityGroupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListNetworkSecurityGroupsResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
}
export interface ListNetworkSecurityGroupsResponse {
    $type: 'yandex.cloud.vpc.v1.ListNetworkSecurityGroupsResponse';
    /** List of security groups that belong to the network which is specified in the request. */
    securityGroups: SecurityGroup[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListNetworkSecurityGroupsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListNetworkSecurityGroupsRequest.page_token] query parameter
     * in the next list request. Subsequent list requests will have their own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListNetworkRouteTablesRequest {
    $type: 'yandex.cloud.vpc.v1.ListNetworkRouteTablesRequest';
    /** ID of the Network resource to list route tables for. */
    networkId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListNetworkRouteTablesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListNetworkRouteTablesResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
}
export interface ListNetworkRouteTablesResponse {
    $type: 'yandex.cloud.vpc.v1.ListNetworkRouteTablesResponse';
    /** List of route tables that belong to the network which is specified in the request. */
    routeTables: RouteTable[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListNetworkRouteTablesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListNetworkRouteTablesRequest.page_token] query parameter
     * in the next list request. Subsequent list requests will have their own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListNetworkOperationsRequest {
    $type: 'yandex.cloud.vpc.v1.ListNetworkOperationsRequest';
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
    $type: 'yandex.cloud.vpc.v1.ListNetworkOperationsResponse';
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
    $type: 'yandex.cloud.vpc.v1.MoveNetworkRequest';
    /** ID of the Network resource to move. */
    networkId: string;
    /** ID of the destination folder. */
    destinationFolderId: string;
}
export interface MoveNetworkMetadata {
    $type: 'yandex.cloud.vpc.v1.MoveNetworkMetadata';
    /** ID of the network that is being moved. */
    networkId: string;
}
export declare const GetNetworkRequest: {
    $type: "yandex.cloud.vpc.v1.GetNetworkRequest";
    encode(message: GetNetworkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetNetworkRequest;
    fromJSON(object: any): GetNetworkRequest;
    toJSON(message: GetNetworkRequest): unknown;
    fromPartial(object: DeepPartial<GetNetworkRequest>): GetNetworkRequest;
};
export declare const ListNetworksRequest: {
    $type: "yandex.cloud.vpc.v1.ListNetworksRequest";
    encode(message: ListNetworksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNetworksRequest;
    fromJSON(object: any): ListNetworksRequest;
    toJSON(message: ListNetworksRequest): unknown;
    fromPartial(object: DeepPartial<ListNetworksRequest>): ListNetworksRequest;
};
export declare const ListNetworksResponse: {
    $type: "yandex.cloud.vpc.v1.ListNetworksResponse";
    encode(message: ListNetworksResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNetworksResponse;
    fromJSON(object: any): ListNetworksResponse;
    toJSON(message: ListNetworksResponse): unknown;
    fromPartial(object: DeepPartial<ListNetworksResponse>): ListNetworksResponse;
};
export declare const CreateNetworkRequest: {
    $type: "yandex.cloud.vpc.v1.CreateNetworkRequest";
    encode(message: CreateNetworkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateNetworkRequest;
    fromJSON(object: any): CreateNetworkRequest;
    toJSON(message: CreateNetworkRequest): unknown;
    fromPartial(object: DeepPartial<CreateNetworkRequest>): CreateNetworkRequest;
};
export declare const CreateNetworkRequest_LabelsEntry: {
    $type: "yandex.cloud.vpc.v1.CreateNetworkRequest.LabelsEntry";
    encode(message: CreateNetworkRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateNetworkRequest_LabelsEntry;
    fromJSON(object: any): CreateNetworkRequest_LabelsEntry;
    toJSON(message: CreateNetworkRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateNetworkRequest_LabelsEntry>): CreateNetworkRequest_LabelsEntry;
};
export declare const CreateNetworkMetadata: {
    $type: "yandex.cloud.vpc.v1.CreateNetworkMetadata";
    encode(message: CreateNetworkMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateNetworkMetadata;
    fromJSON(object: any): CreateNetworkMetadata;
    toJSON(message: CreateNetworkMetadata): unknown;
    fromPartial(object: DeepPartial<CreateNetworkMetadata>): CreateNetworkMetadata;
};
export declare const UpdateNetworkRequest: {
    $type: "yandex.cloud.vpc.v1.UpdateNetworkRequest";
    encode(message: UpdateNetworkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateNetworkRequest;
    fromJSON(object: any): UpdateNetworkRequest;
    toJSON(message: UpdateNetworkRequest): unknown;
    fromPartial(object: DeepPartial<UpdateNetworkRequest>): UpdateNetworkRequest;
};
export declare const UpdateNetworkRequest_LabelsEntry: {
    $type: "yandex.cloud.vpc.v1.UpdateNetworkRequest.LabelsEntry";
    encode(message: UpdateNetworkRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateNetworkRequest_LabelsEntry;
    fromJSON(object: any): UpdateNetworkRequest_LabelsEntry;
    toJSON(message: UpdateNetworkRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateNetworkRequest_LabelsEntry>): UpdateNetworkRequest_LabelsEntry;
};
export declare const UpdateNetworkMetadata: {
    $type: "yandex.cloud.vpc.v1.UpdateNetworkMetadata";
    encode(message: UpdateNetworkMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateNetworkMetadata;
    fromJSON(object: any): UpdateNetworkMetadata;
    toJSON(message: UpdateNetworkMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateNetworkMetadata>): UpdateNetworkMetadata;
};
export declare const DeleteNetworkRequest: {
    $type: "yandex.cloud.vpc.v1.DeleteNetworkRequest";
    encode(message: DeleteNetworkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteNetworkRequest;
    fromJSON(object: any): DeleteNetworkRequest;
    toJSON(message: DeleteNetworkRequest): unknown;
    fromPartial(object: DeepPartial<DeleteNetworkRequest>): DeleteNetworkRequest;
};
export declare const DeleteNetworkMetadata: {
    $type: "yandex.cloud.vpc.v1.DeleteNetworkMetadata";
    encode(message: DeleteNetworkMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteNetworkMetadata;
    fromJSON(object: any): DeleteNetworkMetadata;
    toJSON(message: DeleteNetworkMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteNetworkMetadata>): DeleteNetworkMetadata;
};
export declare const ListNetworkSubnetsRequest: {
    $type: "yandex.cloud.vpc.v1.ListNetworkSubnetsRequest";
    encode(message: ListNetworkSubnetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNetworkSubnetsRequest;
    fromJSON(object: any): ListNetworkSubnetsRequest;
    toJSON(message: ListNetworkSubnetsRequest): unknown;
    fromPartial(object: DeepPartial<ListNetworkSubnetsRequest>): ListNetworkSubnetsRequest;
};
export declare const ListNetworkSubnetsResponse: {
    $type: "yandex.cloud.vpc.v1.ListNetworkSubnetsResponse";
    encode(message: ListNetworkSubnetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNetworkSubnetsResponse;
    fromJSON(object: any): ListNetworkSubnetsResponse;
    toJSON(message: ListNetworkSubnetsResponse): unknown;
    fromPartial(object: DeepPartial<ListNetworkSubnetsResponse>): ListNetworkSubnetsResponse;
};
export declare const ListNetworkSecurityGroupsRequest: {
    $type: "yandex.cloud.vpc.v1.ListNetworkSecurityGroupsRequest";
    encode(message: ListNetworkSecurityGroupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNetworkSecurityGroupsRequest;
    fromJSON(object: any): ListNetworkSecurityGroupsRequest;
    toJSON(message: ListNetworkSecurityGroupsRequest): unknown;
    fromPartial(object: DeepPartial<ListNetworkSecurityGroupsRequest>): ListNetworkSecurityGroupsRequest;
};
export declare const ListNetworkSecurityGroupsResponse: {
    $type: "yandex.cloud.vpc.v1.ListNetworkSecurityGroupsResponse";
    encode(message: ListNetworkSecurityGroupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNetworkSecurityGroupsResponse;
    fromJSON(object: any): ListNetworkSecurityGroupsResponse;
    toJSON(message: ListNetworkSecurityGroupsResponse): unknown;
    fromPartial(object: DeepPartial<ListNetworkSecurityGroupsResponse>): ListNetworkSecurityGroupsResponse;
};
export declare const ListNetworkRouteTablesRequest: {
    $type: "yandex.cloud.vpc.v1.ListNetworkRouteTablesRequest";
    encode(message: ListNetworkRouteTablesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNetworkRouteTablesRequest;
    fromJSON(object: any): ListNetworkRouteTablesRequest;
    toJSON(message: ListNetworkRouteTablesRequest): unknown;
    fromPartial(object: DeepPartial<ListNetworkRouteTablesRequest>): ListNetworkRouteTablesRequest;
};
export declare const ListNetworkRouteTablesResponse: {
    $type: "yandex.cloud.vpc.v1.ListNetworkRouteTablesResponse";
    encode(message: ListNetworkRouteTablesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNetworkRouteTablesResponse;
    fromJSON(object: any): ListNetworkRouteTablesResponse;
    toJSON(message: ListNetworkRouteTablesResponse): unknown;
    fromPartial(object: DeepPartial<ListNetworkRouteTablesResponse>): ListNetworkRouteTablesResponse;
};
export declare const ListNetworkOperationsRequest: {
    $type: "yandex.cloud.vpc.v1.ListNetworkOperationsRequest";
    encode(message: ListNetworkOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNetworkOperationsRequest;
    fromJSON(object: any): ListNetworkOperationsRequest;
    toJSON(message: ListNetworkOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListNetworkOperationsRequest>): ListNetworkOperationsRequest;
};
export declare const ListNetworkOperationsResponse: {
    $type: "yandex.cloud.vpc.v1.ListNetworkOperationsResponse";
    encode(message: ListNetworkOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListNetworkOperationsResponse;
    fromJSON(object: any): ListNetworkOperationsResponse;
    toJSON(message: ListNetworkOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListNetworkOperationsResponse>): ListNetworkOperationsResponse;
};
export declare const MoveNetworkRequest: {
    $type: "yandex.cloud.vpc.v1.MoveNetworkRequest";
    encode(message: MoveNetworkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveNetworkRequest;
    fromJSON(object: any): MoveNetworkRequest;
    toJSON(message: MoveNetworkRequest): unknown;
    fromPartial(object: DeepPartial<MoveNetworkRequest>): MoveNetworkRequest;
};
export declare const MoveNetworkMetadata: {
    $type: "yandex.cloud.vpc.v1.MoveNetworkMetadata";
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
    /** Lists security groups from the specified network. */
    readonly listSecurityGroups: {
        readonly path: "/yandex.cloud.vpc.v1.NetworkService/ListSecurityGroups";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListNetworkSecurityGroupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListNetworkSecurityGroupsRequest;
        readonly responseSerialize: (value: ListNetworkSecurityGroupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListNetworkSecurityGroupsResponse;
    };
    /** Lists route tables from the specified network. */
    readonly listRouteTables: {
        readonly path: "/yandex.cloud.vpc.v1.NetworkService/ListRouteTables";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListNetworkRouteTablesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListNetworkRouteTablesRequest;
        readonly responseSerialize: (value: ListNetworkRouteTablesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListNetworkRouteTablesResponse;
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
    /** Lists security groups from the specified network. */
    listSecurityGroups: handleUnaryCall<ListNetworkSecurityGroupsRequest, ListNetworkSecurityGroupsResponse>;
    /** Lists route tables from the specified network. */
    listRouteTables: handleUnaryCall<ListNetworkRouteTablesRequest, ListNetworkRouteTablesResponse>;
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
    /** Lists security groups from the specified network. */
    listSecurityGroups(request: ListNetworkSecurityGroupsRequest, callback: (error: ServiceError | null, response: ListNetworkSecurityGroupsResponse) => void): ClientUnaryCall;
    listSecurityGroups(request: ListNetworkSecurityGroupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListNetworkSecurityGroupsResponse) => void): ClientUnaryCall;
    listSecurityGroups(request: ListNetworkSecurityGroupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListNetworkSecurityGroupsResponse) => void): ClientUnaryCall;
    /** Lists route tables from the specified network. */
    listRouteTables(request: ListNetworkRouteTablesRequest, callback: (error: ServiceError | null, response: ListNetworkRouteTablesResponse) => void): ClientUnaryCall;
    listRouteTables(request: ListNetworkRouteTablesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListNetworkRouteTablesResponse) => void): ClientUnaryCall;
    listRouteTables(request: ListNetworkRouteTablesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListNetworkRouteTablesResponse) => void): ClientUnaryCall;
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
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
