/// <reference types="node" />
import { Budget, CostBudgetSpec, ExpenseBudgetSpec, BalanceBudgetSpec } from '../../../../yandex/cloud/billing/v1/budget';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from '@grpc/grpc-js';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "yandex.cloud.billing.v1";
export interface GetBudgetRequest {
    /**
     * ID of the budget to return.
     * To get the budget ID, use [BudgetService.List] request.
     */
    id: string;
}
export interface ListBudgetsRequest {
    /**
     * ID of the billing account to list budgets corresponding to.
     * To get the billing account ID, use [BillingAccountService.List] request.
     */
    billingAccountId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListBudgetsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListBudgetsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListBudgetsResponse {
    /** List of budgets. */
    budgets: Budget[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListBudgetsRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListBudgetsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateBudgetRequest {
    /**
     * ID of the billing account to list budgets corresponding to.
     * To get the billing account ID, use [yandex.cloud.billing.v1.BillingAccountService.List] request.
     */
    billingAccountId: string;
    /** Name of the budget. */
    name: string;
    /** Cost budget specification. */
    costBudgetSpec: CostBudgetSpec | undefined;
    /** Expense budget specification. */
    expenseBudgetSpec: ExpenseBudgetSpec | undefined;
    /** Balance budget specification. */
    balanceBudgetSpec: BalanceBudgetSpec | undefined;
}
export interface CreateBudgetMetadata {
    /** ID of the budget. */
    budgetId: string;
}
export declare const GetBudgetRequest: {
    encode(message: GetBudgetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetBudgetRequest;
    fromJSON(object: any): GetBudgetRequest;
    toJSON(message: GetBudgetRequest): unknown;
    fromPartial(object: DeepPartial<GetBudgetRequest>): GetBudgetRequest;
};
export declare const ListBudgetsRequest: {
    encode(message: ListBudgetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBudgetsRequest;
    fromJSON(object: any): ListBudgetsRequest;
    toJSON(message: ListBudgetsRequest): unknown;
    fromPartial(object: DeepPartial<ListBudgetsRequest>): ListBudgetsRequest;
};
export declare const ListBudgetsResponse: {
    encode(message: ListBudgetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBudgetsResponse;
    fromJSON(object: any): ListBudgetsResponse;
    toJSON(message: ListBudgetsResponse): unknown;
    fromPartial(object: DeepPartial<ListBudgetsResponse>): ListBudgetsResponse;
};
export declare const CreateBudgetRequest: {
    encode(message: CreateBudgetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateBudgetRequest;
    fromJSON(object: any): CreateBudgetRequest;
    toJSON(message: CreateBudgetRequest): unknown;
    fromPartial(object: DeepPartial<CreateBudgetRequest>): CreateBudgetRequest;
};
export declare const CreateBudgetMetadata: {
    encode(message: CreateBudgetMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateBudgetMetadata;
    fromJSON(object: any): CreateBudgetMetadata;
    toJSON(message: CreateBudgetMetadata): unknown;
    fromPartial(object: DeepPartial<CreateBudgetMetadata>): CreateBudgetMetadata;
};
/** A set of methods for managing Budget resources. */
export declare const BudgetServiceService: {
    /** Returns the specified budget. */
    readonly get: {
        readonly path: "/yandex.cloud.billing.v1.BudgetService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetBudgetRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetBudgetRequest;
        readonly responseSerialize: (value: Budget) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Budget;
    };
    /** Retrieves the list of budgets corresponding to the specified billing account. */
    readonly list: {
        readonly path: "/yandex.cloud.billing.v1.BudgetService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListBudgetsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListBudgetsRequest;
        readonly responseSerialize: (value: ListBudgetsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListBudgetsResponse;
    };
    /** Creates a budget for the specified billing account. */
    readonly create: {
        readonly path: "/yandex.cloud.billing.v1.BudgetService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateBudgetRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateBudgetRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface BudgetServiceServer extends UntypedServiceImplementation {
    /** Returns the specified budget. */
    get: handleUnaryCall<GetBudgetRequest, Budget>;
    /** Retrieves the list of budgets corresponding to the specified billing account. */
    list: handleUnaryCall<ListBudgetsRequest, ListBudgetsResponse>;
    /** Creates a budget for the specified billing account. */
    create: handleUnaryCall<CreateBudgetRequest, Operation>;
}
export interface BudgetServiceClient extends Client {
    /** Returns the specified budget. */
    get(request: GetBudgetRequest, callback: (error: ServiceError | null, response: Budget) => void): ClientUnaryCall;
    get(request: GetBudgetRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Budget) => void): ClientUnaryCall;
    get(request: GetBudgetRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Budget) => void): ClientUnaryCall;
    /** Retrieves the list of budgets corresponding to the specified billing account. */
    list(request: ListBudgetsRequest, callback: (error: ServiceError | null, response: ListBudgetsResponse) => void): ClientUnaryCall;
    list(request: ListBudgetsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListBudgetsResponse) => void): ClientUnaryCall;
    list(request: ListBudgetsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListBudgetsResponse) => void): ClientUnaryCall;
    /** Creates a budget for the specified billing account. */
    create(request: CreateBudgetRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateBudgetRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateBudgetRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const BudgetServiceClient: new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined) => BudgetServiceClient;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
