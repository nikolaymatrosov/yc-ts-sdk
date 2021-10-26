/// <reference types="node" />
import { FieldMask } from '../../../../google/protobuf/field_mask';
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from '../../../../yandex/cloud/access/access';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { Organization } from '../../../../yandex/cloud/organizationmanager/v1/organization';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.organizationmanager.v1";
export interface GetOrganizationRequest {
    /**
     * ID of the Organization resource to return.
     * To get the organization ID, use a [OrganizationService.List] request.
     */
    organizationId: string;
}
export interface ListOrganizationsRequest {
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
    labels: {
        [key: string]: string;
    };
}
export interface UpdateOrganizationRequest_LabelsEntry {
    key: string;
    value: string;
}
export interface UpdateOrganizationMetadata {
    /** ID of the organization that is being updated. */
    organizationId: string;
}
export interface ListOrganizationOperationsRequest {
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
export declare const GetOrganizationRequest: {
    encode(message: GetOrganizationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetOrganizationRequest;
    fromJSON(object: any): GetOrganizationRequest;
    toJSON(message: GetOrganizationRequest): unknown;
    fromPartial(object: DeepPartial<GetOrganizationRequest>): GetOrganizationRequest;
};
export declare const ListOrganizationsRequest: {
    encode(message: ListOrganizationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListOrganizationsRequest;
    fromJSON(object: any): ListOrganizationsRequest;
    toJSON(message: ListOrganizationsRequest): unknown;
    fromPartial(object: DeepPartial<ListOrganizationsRequest>): ListOrganizationsRequest;
};
export declare const ListOrganizationsResponse: {
    encode(message: ListOrganizationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListOrganizationsResponse;
    fromJSON(object: any): ListOrganizationsResponse;
    toJSON(message: ListOrganizationsResponse): unknown;
    fromPartial(object: DeepPartial<ListOrganizationsResponse>): ListOrganizationsResponse;
};
export declare const UpdateOrganizationRequest: {
    encode(message: UpdateOrganizationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateOrganizationRequest;
    fromJSON(object: any): UpdateOrganizationRequest;
    toJSON(message: UpdateOrganizationRequest): unknown;
    fromPartial(object: DeepPartial<UpdateOrganizationRequest>): UpdateOrganizationRequest;
};
export declare const UpdateOrganizationRequest_LabelsEntry: {
    encode(message: UpdateOrganizationRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateOrganizationRequest_LabelsEntry;
    fromJSON(object: any): UpdateOrganizationRequest_LabelsEntry;
    toJSON(message: UpdateOrganizationRequest_LabelsEntry): unknown;
    fromPartial(object: DeepPartial<UpdateOrganizationRequest_LabelsEntry>): UpdateOrganizationRequest_LabelsEntry;
};
export declare const UpdateOrganizationMetadata: {
    encode(message: UpdateOrganizationMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateOrganizationMetadata;
    fromJSON(object: any): UpdateOrganizationMetadata;
    toJSON(message: UpdateOrganizationMetadata): unknown;
    fromPartial(object: DeepPartial<UpdateOrganizationMetadata>): UpdateOrganizationMetadata;
};
export declare const ListOrganizationOperationsRequest: {
    encode(message: ListOrganizationOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListOrganizationOperationsRequest;
    fromJSON(object: any): ListOrganizationOperationsRequest;
    toJSON(message: ListOrganizationOperationsRequest): unknown;
    fromPartial(object: DeepPartial<ListOrganizationOperationsRequest>): ListOrganizationOperationsRequest;
};
export declare const ListOrganizationOperationsResponse: {
    encode(message: ListOrganizationOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListOrganizationOperationsResponse;
    fromJSON(object: any): ListOrganizationOperationsResponse;
    toJSON(message: ListOrganizationOperationsResponse): unknown;
    fromPartial(object: DeepPartial<ListOrganizationOperationsResponse>): ListOrganizationOperationsResponse;
};
/** A set of methods for managing Organization resources. */
export declare const OrganizationServiceService: {
    /**
     * Returns the specified Organization resource.
     *
     * To get the list of available Organization resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.organizationmanager.v1.OrganizationService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetOrganizationRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetOrganizationRequest;
        readonly responseSerialize: (value: Organization) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Organization;
    };
    /** Retrieves the list of Organization resources. */
    readonly list: {
        readonly path: "/yandex.cloud.organizationmanager.v1.OrganizationService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListOrganizationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListOrganizationsRequest;
        readonly responseSerialize: (value: ListOrganizationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListOrganizationsResponse;
    };
    /** Updates the specified organization. */
    readonly update: {
        readonly path: "/yandex.cloud.organizationmanager.v1.OrganizationService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateOrganizationRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateOrganizationRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified organization. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.organizationmanager.v1.OrganizationService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListOrganizationOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListOrganizationOperationsRequest;
        readonly responseSerialize: (value: ListOrganizationOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListOrganizationOperationsResponse;
    };
    /** Lists access bindings for the specified organization. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.organizationmanager.v1.OrganizationService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for the specified organization. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.organizationmanager.v1.OrganizationService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the specified organization. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.organizationmanager.v1.OrganizationService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface OrganizationServiceServer extends UntypedServiceImplementation {
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
    listOperations: handleUnaryCall<ListOrganizationOperationsRequest, ListOrganizationOperationsResponse>;
    /** Lists access bindings for the specified organization. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the specified organization. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified organization. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}
export interface OrganizationServiceClient extends Client {
    /**
     * Returns the specified Organization resource.
     *
     * To get the list of available Organization resources, make a [List] request.
     */
    get(request: GetOrganizationRequest, callback: (error: ServiceError | null, response: Organization) => void): ClientUnaryCall;
    get(request: GetOrganizationRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Organization) => void): ClientUnaryCall;
    get(request: GetOrganizationRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Organization) => void): ClientUnaryCall;
    /** Retrieves the list of Organization resources. */
    list(request: ListOrganizationsRequest, callback: (error: ServiceError | null, response: ListOrganizationsResponse) => void): ClientUnaryCall;
    list(request: ListOrganizationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListOrganizationsResponse) => void): ClientUnaryCall;
    list(request: ListOrganizationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListOrganizationsResponse) => void): ClientUnaryCall;
    /** Updates the specified organization. */
    update(request: UpdateOrganizationRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateOrganizationRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateOrganizationRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified organization. */
    listOperations(request: ListOrganizationOperationsRequest, callback: (error: ServiceError | null, response: ListOrganizationOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListOrganizationOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListOrganizationOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListOrganizationOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListOrganizationOperationsResponse) => void): ClientUnaryCall;
    /** Lists access bindings for the specified organization. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Sets access bindings for the specified organization. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for the specified organization. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const OrganizationServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => OrganizationServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
