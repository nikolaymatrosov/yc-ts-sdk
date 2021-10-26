/// <reference types="node" />
import { Customer, CustomerPerson } from '../../../../yandex/cloud/billing/v1/customer';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.billing.v1";
export interface ListCustomersRequest {
    /** ID of the reseller. */
    resellerId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListCustomersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListCustomersResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListCustomersResponse {
    /** List of customers. */
    customers: Customer[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListCustomersRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListCustomersRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface InviteCustomerRequest {
    /** ID of the reseller that customer will be associated with. */
    resellerId: string;
    /** Name of the customer. */
    name: string;
    /** Customer email to send invitation to. */
    invitationEmail: string;
    /** Person of the customer. */
    person: CustomerPerson | undefined;
}
export interface ActivateCustomerRequest {
    /**
     * ID of the customer.
     * To get the customer ID, use [CustomerService.List] request.
     */
    customerId: string;
}
export interface SuspendCustomerRequest {
    /**
     * ID of the customer.
     * To get the customer ID, use [CustomerService.List] request.
     */
    customerId: string;
}
export interface CustomerMetadata {
    /** ID of the reseller. */
    resellerId: string;
    /** ID of the customer. */
    customerId: string;
}
export declare const ListCustomersRequest: {
    encode(message: ListCustomersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListCustomersRequest;
    fromJSON(object: any): ListCustomersRequest;
    toJSON(message: ListCustomersRequest): unknown;
    fromPartial(object: DeepPartial<ListCustomersRequest>): ListCustomersRequest;
};
export declare const ListCustomersResponse: {
    encode(message: ListCustomersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListCustomersResponse;
    fromJSON(object: any): ListCustomersResponse;
    toJSON(message: ListCustomersResponse): unknown;
    fromPartial(object: DeepPartial<ListCustomersResponse>): ListCustomersResponse;
};
export declare const InviteCustomerRequest: {
    encode(message: InviteCustomerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InviteCustomerRequest;
    fromJSON(object: any): InviteCustomerRequest;
    toJSON(message: InviteCustomerRequest): unknown;
    fromPartial(object: DeepPartial<InviteCustomerRequest>): InviteCustomerRequest;
};
export declare const ActivateCustomerRequest: {
    encode(message: ActivateCustomerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ActivateCustomerRequest;
    fromJSON(object: any): ActivateCustomerRequest;
    toJSON(message: ActivateCustomerRequest): unknown;
    fromPartial(object: DeepPartial<ActivateCustomerRequest>): ActivateCustomerRequest;
};
export declare const SuspendCustomerRequest: {
    encode(message: SuspendCustomerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SuspendCustomerRequest;
    fromJSON(object: any): SuspendCustomerRequest;
    toJSON(message: SuspendCustomerRequest): unknown;
    fromPartial(object: DeepPartial<SuspendCustomerRequest>): SuspendCustomerRequest;
};
export declare const CustomerMetadata: {
    encode(message: CustomerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CustomerMetadata;
    fromJSON(object: any): CustomerMetadata;
    toJSON(message: CustomerMetadata): unknown;
    fromPartial(object: DeepPartial<CustomerMetadata>): CustomerMetadata;
};
/** A set of methods for managing Customer resources. */
export declare const CustomerServiceService: {
    /** Retrieves the list of customers associated with the specified reseller. */
    readonly list: {
        readonly path: "/yandex.cloud.billing.v1.CustomerService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListCustomersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListCustomersRequest;
        readonly responseSerialize: (value: ListCustomersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListCustomersResponse;
    };
    /** Invites customer to the specified reseller. */
    readonly invite: {
        readonly path: "/yandex.cloud.billing.v1.CustomerService/Invite";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: InviteCustomerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => InviteCustomerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Activates specified customer. After customer is activated, he can use resources associated with his billing account. */
    readonly activate: {
        readonly path: "/yandex.cloud.billing.v1.CustomerService/Activate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ActivateCustomerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ActivateCustomerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Suspend specified customer. After customer is suspended, he can't use resources associated with his billing account. */
    readonly suspend: {
        readonly path: "/yandex.cloud.billing.v1.CustomerService/Suspend";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SuspendCustomerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SuspendCustomerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface CustomerServiceServer extends UntypedServiceImplementation {
    /** Retrieves the list of customers associated with the specified reseller. */
    list: handleUnaryCall<ListCustomersRequest, ListCustomersResponse>;
    /** Invites customer to the specified reseller. */
    invite: handleUnaryCall<InviteCustomerRequest, Operation>;
    /** Activates specified customer. After customer is activated, he can use resources associated with his billing account. */
    activate: handleUnaryCall<ActivateCustomerRequest, Operation>;
    /** Suspend specified customer. After customer is suspended, he can't use resources associated with his billing account. */
    suspend: handleUnaryCall<SuspendCustomerRequest, Operation>;
}
export interface CustomerServiceClient extends Client {
    /** Retrieves the list of customers associated with the specified reseller. */
    list(request: ListCustomersRequest, callback: (error: ServiceError | null, response: ListCustomersResponse) => void): ClientUnaryCall;
    list(request: ListCustomersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListCustomersResponse) => void): ClientUnaryCall;
    list(request: ListCustomersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListCustomersResponse) => void): ClientUnaryCall;
    /** Invites customer to the specified reseller. */
    invite(request: InviteCustomerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    invite(request: InviteCustomerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    invite(request: InviteCustomerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Activates specified customer. After customer is activated, he can use resources associated with his billing account. */
    activate(request: ActivateCustomerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    activate(request: ActivateCustomerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    activate(request: ActivateCustomerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Suspend specified customer. After customer is suspended, he can't use resources associated with his billing account. */
    suspend(request: SuspendCustomerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    suspend(request: SuspendCustomerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    suspend(request: SuspendCustomerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const CustomerServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => CustomerServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
