/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { RouteTable, StaticRoute } from '../../../../yandex/cloud/vpc/v1/route_table';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.vpc.v1";
export interface GetRouteTableRequest {
    /**
     * ID of the RouteTable resource to return.
     * To get the route table ID use a [RouteTableService.List] request.
     */
    routeTableId: string;
}
export interface ListRouteTablesRequest {
    /**
     * ID of the folder that the route table belongs to.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListRouteTablesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListRouteTablesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [RouteTable.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     */
    filter: string;
}
export interface ListRouteTablesResponse {
    /** List of RouteTable resources. */
    routeTables: RouteTable[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListRouteTablesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListRouteTablesRequest.page_token] query parameter
     * in the next list request. Subsequent list requests will have their own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateRouteTableRequest {
    /**
     * ID of the folder that the route table belongs to.
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the route table.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the route table. */
    description: string;
    /** Resource labels, `` key:value `` pairs. */
    labels: {
        [key: string]: string;
    };
    /** ID of the network the route table belongs to. */
    networkId: string;
    /** List of static routes. */
    staticRoutes: StaticRoute[];
}
export interface CreateRouteTableRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface CreateRouteTableMetadata {
    /** ID of the route table that is being created. */
    routeTableId: string;
}
export interface UpdateRouteTableRequest {
    /** ID of the RouteTable resource to update. */
    routeTableId: string;
    /** Field mask that specifies which fields of the RouteTable resource are going to be updated. */
    updateMask: FieldMask | undefined;
    /**
     * Name of the route table.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the route table. */
    description: string;
    /** Resource labels as `` key:value `` pairs. */
    labels: {
        [key: string]: string;
    };
    /** List of static routes. */
    staticRoutes: StaticRoute[];
}
export interface UpdateRouteTableRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface UpdateRouteTableMetadata {
    /** ID of the RouteTable resource that is being updated. */
    routeTableId: string;
}
export interface DeleteRouteTableRequest {
    /**
     * ID of the route table to delete.
     * To get the route table ID use a [RouteTableService.List] request.
     */
    routeTableId: string;
}
export interface DeleteRouteTableMetadata {
    /** ID of the RouteTable resource that is being deleted. */
    routeTableId: string;
}
export interface ListRouteTableOperationsRequest {
    /** ID of the RouteTable resource to list operations for. */
    routeTableId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size], the service returns a [ListRouteTableOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListRouteTableOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListRouteTableOperationsResponse {
    /** List of operations for the specified RouteTable resource. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListRouteTableOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListRouteTableOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface MoveRouteTableRequest {
    /** ID of the RouteTable resource to move. */
    routeTableId: string;
    /** ID of the destination folder. */
    destinationFolderId: string;
}
export interface MoveRouteTableMetadata {
    /** ID of the RouteTable resource that is being moved. */
    routeTableId: string;
}
export declare const GetRouteTableRequest: {
    encode(message: GetRouteTableRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetRouteTableRequest;
    fromJSON(object: any): GetRouteTableRequest;
    toJSON(message: GetRouteTableRequest): unknown;
    fromPartial(object: DeepPartial<GetRouteTableRequest>): GetRouteTableRequest;
};
export declare const ListRouteTablesRequest: {
    encode(message: ListRouteTablesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRouteTablesRequest;
    fromJSON(object: any): ListRouteTablesRequest;
    toJSON(message: ListRouteTablesRequest): unknown;
    fromPartial(object: DeepPartial<ListRouteTablesRequest>): ListRouteTablesRequest;
};
export declare const ListRouteTablesResponse: {
    encode(message: ListRouteTablesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRouteTablesResponse;
    fromJSON(object: any): ListRouteTablesResponse;
    toJSON(message: ListRouteTablesResponse): unknown;
    fromPartial(object: DeepPartial<ListRouteTablesResponse>): ListRouteTablesResponse;
};
export declare const CreateRouteTableRequest: {
    encode(message: CreateRouteTableRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateRouteTableRequest;
    fromJSON(object: any): CreateRouteTableRequest;
    toJSON(message: CreateRouteTableRequest): unknown;
    fromPartial(object: DeepPartial<CreateRouteTableRequest>): CreateRouteTableRequest;
};
export declare const CreateRouteTableRequest_LabelsEntry: {
    encode(message: CreateRouteTableRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateRouteTableRequest_LabelsEntry;
    fromJSON(object: any): CreateRouteTableRequest_LabelsEntry;
    toJSON(message: CreateRouteTableRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<CreateRouteTableRequest_LabelsEntry>): CreateRouteTableRequest_LabelsEntry;
};
export declare const CreateRouteTableMetadata: {
    encode(message: CreateRouteTableMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateRouteTableMetadata;
    fromJSON(object: any): CreateRouteTableMetadata;
    toJSON(message: CreateRouteTableMetadata): unknown;
    fromPartial(object: DeepPartial<CreateRouteTableMetadata>): CreateRouteTableMetadata;
};
export declare const UpdateRouteTableRequest: {
    encode(message: UpdateRouteTableRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRouteTableRequest;
    fromJSON(object: any): UpdateRouteTableRequest;
    toJSON(message: UpdateRouteTableRequest): unknown;
    fromPartial(object: DeepPartial<UpdateRouteTableRequest>): UpdateRouteTableRequest;
};
export declare const UpdateRouteTableRequest_LabelsEntry: {
    encode(message: UpdateRouteTableRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRouteTableRequest_LabelsEntry;
    fromJSON(object: any): UpdateRouteTableRequest_LabelsEntry;
    toJSON(message: UpdateRouteTableRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateRouteTableRequest_LabelsEntry>): UpdateRouteTableRequest_LabelsEntry;
};
export declare const UpdateRouteTableMetadata: {
    encode(message: UpdateRouteTableMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRouteTableMetadata;
    fromJSON(object: any): UpdateRouteTableMetadata;
    toJSON(message: UpdateRouteTableMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateRouteTableMetadata>): UpdateRouteTableMetadata;
};
export declare const DeleteRouteTableRequest: {
    encode(message: DeleteRouteTableRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteRouteTableRequest;
    fromJSON(object: any): DeleteRouteTableRequest;
    toJSON(message: DeleteRouteTableRequest): unknown;
    fromPartial(object: DeepPartial<DeleteRouteTableRequest>): DeleteRouteTableRequest;
};
export declare const DeleteRouteTableMetadata: {
    encode(message: DeleteRouteTableMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteRouteTableMetadata;
    fromJSON(object: any): DeleteRouteTableMetadata;
    toJSON(message: DeleteRouteTableMetadata): unknown;
    fromPartial(object: DeepPartial<DeleteRouteTableMetadata>): DeleteRouteTableMetadata;
};
export declare const ListRouteTableOperationsRequest: {
    encode(message: ListRouteTableOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRouteTableOperationsRequest;
    fromJSON(object: any): ListRouteTableOperationsRequest;
    toJSON(message: ListRouteTableOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListRouteTableOperationsRequest>): ListRouteTableOperationsRequest;
};
export declare const ListRouteTableOperationsResponse: {
    encode(message: ListRouteTableOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRouteTableOperationsResponse;
    fromJSON(object: any): ListRouteTableOperationsResponse;
    toJSON(message: ListRouteTableOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListRouteTableOperationsResponse>): ListRouteTableOperationsResponse;
};
export declare const MoveRouteTableRequest: {
    encode(message: MoveRouteTableRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveRouteTableRequest;
    fromJSON(object: any): MoveRouteTableRequest;
    toJSON(message: MoveRouteTableRequest): unknown;
    fromPartial(object: DeepPartial<MoveRouteTableRequest>): MoveRouteTableRequest;
};
export declare const MoveRouteTableMetadata: {
    encode(message: MoveRouteTableMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveRouteTableMetadata;
    fromJSON(object: any): MoveRouteTableMetadata;
    toJSON(message: MoveRouteTableMetadata): unknown;
    fromPartial(object: DeepPartial<MoveRouteTableMetadata>): MoveRouteTableMetadata;
};
/** A set of methods for managing RouteTable resources. */
export declare const RouteTableServiceService: {
    /**
     * Returns the specified RouteTable resource.
     *
     * To get the list of available RouteTable resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.vpc.v1.RouteTableService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetRouteTableRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetRouteTableRequest;
        readonly responseSerialize: (value: RouteTable) => Buffer;
        readonly responseDeserialize: (value: Buffer) => RouteTable;
    };
    /** Retrieves the list of RouteTable resources in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.vpc.v1.RouteTableService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListRouteTablesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListRouteTablesRequest;
        readonly responseSerialize: (value: ListRouteTablesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListRouteTablesResponse;
    };
    /**
     * Creates a route table in the specified folder and network.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    readonly create: {
        readonly path: "/yandex.cloud.vpc.v1.RouteTableService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateRouteTableRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateRouteTableRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Updates the specified route table.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    readonly update: {
        readonly path: "/yandex.cloud.vpc.v1.RouteTableService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateRouteTableRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateRouteTableRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified route table. */
    readonly delete: {
        readonly path: "/yandex.cloud.vpc.v1.RouteTableService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteRouteTableRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteRouteTableRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** List operations for the specified route table. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.vpc.v1.RouteTableService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListRouteTableOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListRouteTableOperationsRequest;
        readonly responseSerialize: (value: ListRouteTableOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListRouteTableOperationsResponse;
    };
    /** Move route table to another folder. */
    readonly move: {
        readonly path: "/yandex.cloud.vpc.v1.RouteTableService/Move";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MoveRouteTableRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MoveRouteTableRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface RouteTableServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified RouteTable resource.
     *
     * To get the list of available RouteTable resources, make a [List] request.
     */
    get: handleUnaryCall<GetRouteTableRequest, RouteTable>;
    /** Retrieves the list of RouteTable resources in the specified folder. */
    list: handleUnaryCall<ListRouteTablesRequest, ListRouteTablesResponse>;
    /**
     * Creates a route table in the specified folder and network.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: handleUnaryCall<CreateRouteTableRequest, Operation>;
    /**
     * Updates the specified route table.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update: handleUnaryCall<UpdateRouteTableRequest, Operation>;
    /** Deletes the specified route table. */
    delete: handleUnaryCall<DeleteRouteTableRequest, Operation>;
    /** List operations for the specified route table. */
    listOperations: handleUnaryCall<ListRouteTableOperationsRequest, ListRouteTableOperationsResponse>;
    /** Move route table to another folder. */
    move: handleUnaryCall<MoveRouteTableRequest, Operation>;
}
export interface RouteTableServiceClient extends Client {
    /**
     * Returns the specified RouteTable resource.
     *
     * To get the list of available RouteTable resources, make a [List] request.
     */
    get(request: GetRouteTableRequest, callback: (error: ServiceError | null, response: RouteTable) => void): ClientUnaryCall;
    get(request: GetRouteTableRequest, metadata: Metadata, callback: (error: ServiceError | null, response: RouteTable) => void): ClientUnaryCall;
    get(request: GetRouteTableRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: RouteTable) => void): ClientUnaryCall;
    /** Retrieves the list of RouteTable resources in the specified folder. */
    list(request: ListRouteTablesRequest, callback: (error: ServiceError | null, response: ListRouteTablesResponse) => void): ClientUnaryCall;
    list(request: ListRouteTablesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListRouteTablesResponse) => void): ClientUnaryCall;
    list(request: ListRouteTablesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListRouteTablesResponse) => void): ClientUnaryCall;
    /**
     * Creates a route table in the specified folder and network.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create(request: CreateRouteTableRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateRouteTableRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateRouteTableRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Updates the specified route table.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    update(request: UpdateRouteTableRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateRouteTableRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateRouteTableRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified route table. */
    delete(request: DeleteRouteTableRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteRouteTableRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteRouteTableRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** List operations for the specified route table. */
    listOperations(request: ListRouteTableOperationsRequest, callback: (error: ServiceError | null, response: ListRouteTableOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListRouteTableOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListRouteTableOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListRouteTableOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListRouteTableOperationsResponse) => void): ClientUnaryCall;
    /** Move route table to another folder. */
    move(request: MoveRouteTableRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveRouteTableRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveRouteTableRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const RouteTableServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => RouteTableServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
