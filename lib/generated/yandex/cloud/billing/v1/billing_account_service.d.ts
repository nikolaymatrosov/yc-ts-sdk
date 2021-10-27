/// <reference types="node" />
import { ListAccessBindingsRequest, ListAccessBindingsResponse, UpdateAccessBindingsRequest } from '../../../../yandex/cloud/access/access';
import { BillableObjectBinding, BillableObject } from '../../../../yandex/cloud/billing/v1/billable_object';
import { BillingAccount } from '../../../../yandex/cloud/billing/v1/billing_account';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.billing.v1";
export interface GetBillingAccountRequest {
    $type: 'yandex.cloud.billing.v1.GetBillingAccountRequest';
    /**
     * ID of the billing account to return.
     * To get the billing account ID, use [BillingAccountService.List] request.
     */
    id: string;
}
export interface ListBillingAccountsRequest {
    $type: 'yandex.cloud.billing.v1.ListBillingAccountsRequest';
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListBillingAccountsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListBillingAccountsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListBillingAccountsResponse {
    $type: 'yandex.cloud.billing.v1.ListBillingAccountsResponse';
    /** List of billing accounts. */
    billingAccounts: BillingAccount[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListBillingAccountsRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListBillingAccountsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListBillableObjectBindingsRequest {
    $type: 'yandex.cloud.billing.v1.ListBillableObjectBindingsRequest';
    /**
     * ID of the billing account to list associated billable object bindings.
     * To get the billing account ID, use [BillingAccountService.List] request.
     */
    billingAccountId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListBillableObjectBindingsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListBillableObjectBindingsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListBillableObjectBindingsResponse {
    $type: 'yandex.cloud.billing.v1.ListBillableObjectBindingsResponse';
    /** List of billable object bindings. */
    billableObjectBindings: BillableObjectBinding[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListBillableObjectBindingsRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListBillableObjectBindingsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface BindBillableObjectRequest {
    $type: 'yandex.cloud.billing.v1.BindBillableObjectRequest';
    /**
     * ID of the billing account to bind billable object.
     * To get the billing account ID, use [BillingAccountService.List] request.
     */
    billingAccountId: string;
    /** [yandex.cloud.billing.v1.BillableObject] to bind with billing account. */
    billableObject: BillableObject | undefined;
}
export interface BindBillableObjectMetadata {
    $type: 'yandex.cloud.billing.v1.BindBillableObjectMetadata';
    /** ID of the [yandex.cloud.billing.v1.BillableObject] that was bound to billing account. */
    billableObjectId: string;
}
export declare const GetBillingAccountRequest: {
    $type: "yandex.cloud.billing.v1.GetBillingAccountRequest";
    encode(message: GetBillingAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetBillingAccountRequest;
    fromJSON(object: any): GetBillingAccountRequest;
    toJSON(message: GetBillingAccountRequest): unknown;
    fromPartial(object: DeepPartial<GetBillingAccountRequest>): GetBillingAccountRequest;
};
export declare const ListBillingAccountsRequest: {
    $type: "yandex.cloud.billing.v1.ListBillingAccountsRequest";
    encode(message: ListBillingAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBillingAccountsRequest;
    fromJSON(object: any): ListBillingAccountsRequest;
    toJSON(message: ListBillingAccountsRequest): unknown;
    fromPartial(object: DeepPartial<ListBillingAccountsRequest>): ListBillingAccountsRequest;
};
export declare const ListBillingAccountsResponse: {
    $type: "yandex.cloud.billing.v1.ListBillingAccountsResponse";
    encode(message: ListBillingAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBillingAccountsResponse;
    fromJSON(object: any): ListBillingAccountsResponse;
    toJSON(message: ListBillingAccountsResponse): unknown;
    fromPartial(object: DeepPartial<ListBillingAccountsResponse>): ListBillingAccountsResponse;
};
export declare const ListBillableObjectBindingsRequest: {
    $type: "yandex.cloud.billing.v1.ListBillableObjectBindingsRequest";
    encode(message: ListBillableObjectBindingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBillableObjectBindingsRequest;
    fromJSON(object: any): ListBillableObjectBindingsRequest;
    toJSON(message: ListBillableObjectBindingsRequest): unknown;
    fromPartial(object: DeepPartial<ListBillableObjectBindingsRequest>): ListBillableObjectBindingsRequest;
};
export declare const ListBillableObjectBindingsResponse: {
    $type: "yandex.cloud.billing.v1.ListBillableObjectBindingsResponse";
    encode(message: ListBillableObjectBindingsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBillableObjectBindingsResponse;
    fromJSON(object: any): ListBillableObjectBindingsResponse;
    toJSON(message: ListBillableObjectBindingsResponse): unknown;
    fromPartial(object: DeepPartial<ListBillableObjectBindingsResponse>): ListBillableObjectBindingsResponse;
};
export declare const BindBillableObjectRequest: {
    $type: "yandex.cloud.billing.v1.BindBillableObjectRequest";
    encode(message: BindBillableObjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BindBillableObjectRequest;
    fromJSON(object: any): BindBillableObjectRequest;
    toJSON(message: BindBillableObjectRequest): unknown;
    fromPartial(object: DeepPartial<BindBillableObjectRequest>): BindBillableObjectRequest;
};
export declare const BindBillableObjectMetadata: {
    $type: "yandex.cloud.billing.v1.BindBillableObjectMetadata";
    encode(message: BindBillableObjectMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BindBillableObjectMetadata;
    fromJSON(object: any): BindBillableObjectMetadata;
    toJSON(message: BindBillableObjectMetadata): unknown;
    fromPartial(object: DeepPartial<BindBillableObjectMetadata>): BindBillableObjectMetadata;
};
/** A set of methods for managing BillingAccount resources. */
export declare const BillingAccountServiceService: {
    /** Returns the specified billing account. */
    readonly get: {
        readonly path: "/yandex.cloud.billing.v1.BillingAccountService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetBillingAccountRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetBillingAccountRequest;
        readonly responseSerialize: (value: BillingAccount) => Buffer;
        readonly responseDeserialize: (value: Buffer) => BillingAccount;
    };
    /** Retrieves the list of billing accounts available for current user. */
    readonly list: {
        readonly path: "/yandex.cloud.billing.v1.BillingAccountService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListBillingAccountsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListBillingAccountsRequest;
        readonly responseSerialize: (value: ListBillingAccountsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListBillingAccountsResponse;
    };
    /** Retrieves the list of billable object bindings associated with the specified billing account. */
    readonly listBillableObjectBindings: {
        readonly path: "/yandex.cloud.billing.v1.BillingAccountService/ListBillableObjectBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListBillableObjectBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListBillableObjectBindingsRequest;
        readonly responseSerialize: (value: ListBillableObjectBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListBillableObjectBindingsResponse;
    };
    /** Binds billable object to the specified billing account. */
    readonly bindBillableObject: {
        readonly path: "/yandex.cloud.billing.v1.BillingAccountService/BindBillableObject";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: BindBillableObjectRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => BindBillableObjectRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists access bindings for the specified billing account. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.billing.v1.BillingAccountService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Updates access bindings for the specified billing account. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.billing.v1.BillingAccountService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface BillingAccountServiceServer extends UntypedServiceImplementation {
    /** Returns the specified billing account. */
    get: handleUnaryCall<GetBillingAccountRequest, BillingAccount>;
    /** Retrieves the list of billing accounts available for current user. */
    list: handleUnaryCall<ListBillingAccountsRequest, ListBillingAccountsResponse>;
    /** Retrieves the list of billable object bindings associated with the specified billing account. */
    listBillableObjectBindings: handleUnaryCall<ListBillableObjectBindingsRequest, ListBillableObjectBindingsResponse>;
    /** Binds billable object to the specified billing account. */
    bindBillableObject: handleUnaryCall<BindBillableObjectRequest, Operation>;
    /** Lists access bindings for the specified billing account. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Updates access bindings for the specified billing account. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}
export interface BillingAccountServiceClient extends Client {
    /** Returns the specified billing account. */
    get(request: GetBillingAccountRequest, callback: (error: ServiceError | null, response: BillingAccount) => void): ClientUnaryCall;
    get(request: GetBillingAccountRequest, metadata: Metadata, callback: (error: ServiceError | null, response: BillingAccount) => void): ClientUnaryCall;
    get(request: GetBillingAccountRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BillingAccount) => void): ClientUnaryCall;
    /** Retrieves the list of billing accounts available for current user. */
    list(request: ListBillingAccountsRequest, callback: (error: ServiceError | null, response: ListBillingAccountsResponse) => void): ClientUnaryCall;
    list(request: ListBillingAccountsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListBillingAccountsResponse) => void): ClientUnaryCall;
    list(request: ListBillingAccountsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListBillingAccountsResponse) => void): ClientUnaryCall;
    /** Retrieves the list of billable object bindings associated with the specified billing account. */
    listBillableObjectBindings(request: ListBillableObjectBindingsRequest, callback: (error: ServiceError | null, response: ListBillableObjectBindingsResponse) => void): ClientUnaryCall;
    listBillableObjectBindings(request: ListBillableObjectBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListBillableObjectBindingsResponse) => void): ClientUnaryCall;
    listBillableObjectBindings(request: ListBillableObjectBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListBillableObjectBindingsResponse) => void): ClientUnaryCall;
    /** Binds billable object to the specified billing account. */
    bindBillableObject(request: BindBillableObjectRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    bindBillableObject(request: BindBillableObjectRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    bindBillableObject(request: BindBillableObjectRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists access bindings for the specified billing account. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Updates access bindings for the specified billing account. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const BillingAccountServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => BillingAccountServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
