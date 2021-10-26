/* eslint-disable */
import {
    ListAccessBindingsRequest,
    ListAccessBindingsResponse,
    UpdateAccessBindingsRequest,
} from '../../../../yandex/cloud/access/access';
import {
    BillableObjectBinding,
    BillableObject,
} from '../../../../yandex/cloud/billing/v1/billable_object';
import { BillingAccount } from '../../../../yandex/cloud/billing/v1/billing_account';
import { Operation } from '../../../../yandex/cloud/operation/operation';
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

export const protobufPackage = 'yandex.cloud.billing.v1';

export interface GetBillingAccountRequest {
    /**
     * ID of the billing account to return.
     * To get the billing account ID, use [BillingAccountService.List] request.
     */
    id: string;
}

export interface ListBillingAccountsRequest {
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
    /**
     * ID of the billing account to bind billable object.
     * To get the billing account ID, use [BillingAccountService.List] request.
     */
    billingAccountId: string;
    /** [yandex.cloud.billing.v1.BillableObject] to bind with billing account. */
    billableObject: BillableObject | undefined;
}

export interface BindBillableObjectMetadata {
    /** ID of the [yandex.cloud.billing.v1.BillableObject] that was bound to billing account. */
    billableObjectId: string;
}

const baseGetBillingAccountRequest: object = { id: '' };

export const GetBillingAccountRequest = {
    encode(
        message: GetBillingAccountRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetBillingAccountRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetBillingAccountRequest,
        } as GetBillingAccountRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetBillingAccountRequest {
        const message = {
            ...baseGetBillingAccountRequest,
        } as GetBillingAccountRequest;
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        return message;
    },

    toJSON(message: GetBillingAccountRequest): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },

    fromPartial(
        object: DeepPartial<GetBillingAccountRequest>
    ): GetBillingAccountRequest {
        const message = {
            ...baseGetBillingAccountRequest,
        } as GetBillingAccountRequest;
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        return message;
    },
};

const baseListBillingAccountsRequest: object = { pageSize: 0, pageToken: '' };

export const ListBillingAccountsRequest = {
    encode(
        message: ListBillingAccountsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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
    ): ListBillingAccountsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListBillingAccountsRequest,
        } as ListBillingAccountsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
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

    fromJSON(object: any): ListBillingAccountsRequest {
        const message = {
            ...baseListBillingAccountsRequest,
        } as ListBillingAccountsRequest;
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

    toJSON(message: ListBillingAccountsRequest): unknown {
        const obj: any = {};
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListBillingAccountsRequest>
    ): ListBillingAccountsRequest {
        const message = {
            ...baseListBillingAccountsRequest,
        } as ListBillingAccountsRequest;
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

const baseListBillingAccountsResponse: object = { nextPageToken: '' };

export const ListBillingAccountsResponse = {
    encode(
        message: ListBillingAccountsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.billingAccounts) {
            BillingAccount.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListBillingAccountsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListBillingAccountsResponse,
        } as ListBillingAccountsResponse;
        message.billingAccounts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.billingAccounts.push(
                        BillingAccount.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListBillingAccountsResponse {
        const message = {
            ...baseListBillingAccountsResponse,
        } as ListBillingAccountsResponse;
        message.billingAccounts = [];
        if (
            object.billingAccounts !== undefined &&
            object.billingAccounts !== null
        ) {
            for (const e of object.billingAccounts) {
                message.billingAccounts.push(BillingAccount.fromJSON(e));
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

    toJSON(message: ListBillingAccountsResponse): unknown {
        const obj: any = {};
        if (message.billingAccounts) {
            obj.billingAccounts = message.billingAccounts.map((e) =>
                e ? BillingAccount.toJSON(e) : undefined
            );
        } else {
            obj.billingAccounts = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListBillingAccountsResponse>
    ): ListBillingAccountsResponse {
        const message = {
            ...baseListBillingAccountsResponse,
        } as ListBillingAccountsResponse;
        message.billingAccounts = [];
        if (
            object.billingAccounts !== undefined &&
            object.billingAccounts !== null
        ) {
            for (const e of object.billingAccounts) {
                message.billingAccounts.push(BillingAccount.fromPartial(e));
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

const baseListBillableObjectBindingsRequest: object = {
    billingAccountId: '',
    pageSize: 0,
    pageToken: '',
};

export const ListBillableObjectBindingsRequest = {
    encode(
        message: ListBillableObjectBindingsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.billingAccountId !== '') {
            writer.uint32(10).string(message.billingAccountId);
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
    ): ListBillableObjectBindingsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListBillableObjectBindingsRequest,
        } as ListBillableObjectBindingsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.billingAccountId = reader.string();
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

    fromJSON(object: any): ListBillableObjectBindingsRequest {
        const message = {
            ...baseListBillableObjectBindingsRequest,
        } as ListBillableObjectBindingsRequest;
        if (
            object.billingAccountId !== undefined &&
            object.billingAccountId !== null
        ) {
            message.billingAccountId = String(object.billingAccountId);
        } else {
            message.billingAccountId = '';
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

    toJSON(message: ListBillableObjectBindingsRequest): unknown {
        const obj: any = {};
        message.billingAccountId !== undefined &&
            (obj.billingAccountId = message.billingAccountId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListBillableObjectBindingsRequest>
    ): ListBillableObjectBindingsRequest {
        const message = {
            ...baseListBillableObjectBindingsRequest,
        } as ListBillableObjectBindingsRequest;
        if (
            object.billingAccountId !== undefined &&
            object.billingAccountId !== null
        ) {
            message.billingAccountId = object.billingAccountId;
        } else {
            message.billingAccountId = '';
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

const baseListBillableObjectBindingsResponse: object = { nextPageToken: '' };

export const ListBillableObjectBindingsResponse = {
    encode(
        message: ListBillableObjectBindingsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.billableObjectBindings) {
            BillableObjectBinding.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ListBillableObjectBindingsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListBillableObjectBindingsResponse,
        } as ListBillableObjectBindingsResponse;
        message.billableObjectBindings = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.billableObjectBindings.push(
                        BillableObjectBinding.decode(reader, reader.uint32())
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

    fromJSON(object: any): ListBillableObjectBindingsResponse {
        const message = {
            ...baseListBillableObjectBindingsResponse,
        } as ListBillableObjectBindingsResponse;
        message.billableObjectBindings = [];
        if (
            object.billableObjectBindings !== undefined &&
            object.billableObjectBindings !== null
        ) {
            for (const e of object.billableObjectBindings) {
                message.billableObjectBindings.push(
                    BillableObjectBinding.fromJSON(e)
                );
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

    toJSON(message: ListBillableObjectBindingsResponse): unknown {
        const obj: any = {};
        if (message.billableObjectBindings) {
            obj.billableObjectBindings = message.billableObjectBindings.map(
                (e) => (e ? BillableObjectBinding.toJSON(e) : undefined)
            );
        } else {
            obj.billableObjectBindings = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },

    fromPartial(
        object: DeepPartial<ListBillableObjectBindingsResponse>
    ): ListBillableObjectBindingsResponse {
        const message = {
            ...baseListBillableObjectBindingsResponse,
        } as ListBillableObjectBindingsResponse;
        message.billableObjectBindings = [];
        if (
            object.billableObjectBindings !== undefined &&
            object.billableObjectBindings !== null
        ) {
            for (const e of object.billableObjectBindings) {
                message.billableObjectBindings.push(
                    BillableObjectBinding.fromPartial(e)
                );
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

const baseBindBillableObjectRequest: object = { billingAccountId: '' };

export const BindBillableObjectRequest = {
    encode(
        message: BindBillableObjectRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.billingAccountId !== '') {
            writer.uint32(10).string(message.billingAccountId);
        }
        if (message.billableObject !== undefined) {
            BillableObject.encode(
                message.billableObject,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): BindBillableObjectRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseBindBillableObjectRequest,
        } as BindBillableObjectRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.billingAccountId = reader.string();
                    break;
                case 2:
                    message.billableObject = BillableObject.decode(
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

    fromJSON(object: any): BindBillableObjectRequest {
        const message = {
            ...baseBindBillableObjectRequest,
        } as BindBillableObjectRequest;
        if (
            object.billingAccountId !== undefined &&
            object.billingAccountId !== null
        ) {
            message.billingAccountId = String(object.billingAccountId);
        } else {
            message.billingAccountId = '';
        }
        if (
            object.billableObject !== undefined &&
            object.billableObject !== null
        ) {
            message.billableObject = BillableObject.fromJSON(
                object.billableObject
            );
        } else {
            message.billableObject = undefined;
        }
        return message;
    },

    toJSON(message: BindBillableObjectRequest): unknown {
        const obj: any = {};
        message.billingAccountId !== undefined &&
            (obj.billingAccountId = message.billingAccountId);
        message.billableObject !== undefined &&
            (obj.billableObject = message.billableObject
                ? BillableObject.toJSON(message.billableObject)
                : undefined);
        return obj;
    },

    fromPartial(
        object: DeepPartial<BindBillableObjectRequest>
    ): BindBillableObjectRequest {
        const message = {
            ...baseBindBillableObjectRequest,
        } as BindBillableObjectRequest;
        if (
            object.billingAccountId !== undefined &&
            object.billingAccountId !== null
        ) {
            message.billingAccountId = object.billingAccountId;
        } else {
            message.billingAccountId = '';
        }
        if (
            object.billableObject !== undefined &&
            object.billableObject !== null
        ) {
            message.billableObject = BillableObject.fromPartial(
                object.billableObject
            );
        } else {
            message.billableObject = undefined;
        }
        return message;
    },
};

const baseBindBillableObjectMetadata: object = { billableObjectId: '' };

export const BindBillableObjectMetadata = {
    encode(
        message: BindBillableObjectMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.billableObjectId !== '') {
            writer.uint32(10).string(message.billableObjectId);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): BindBillableObjectMetadata {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseBindBillableObjectMetadata,
        } as BindBillableObjectMetadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.billableObjectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BindBillableObjectMetadata {
        const message = {
            ...baseBindBillableObjectMetadata,
        } as BindBillableObjectMetadata;
        if (
            object.billableObjectId !== undefined &&
            object.billableObjectId !== null
        ) {
            message.billableObjectId = String(object.billableObjectId);
        } else {
            message.billableObjectId = '';
        }
        return message;
    },

    toJSON(message: BindBillableObjectMetadata): unknown {
        const obj: any = {};
        message.billableObjectId !== undefined &&
            (obj.billableObjectId = message.billableObjectId);
        return obj;
    },

    fromPartial(
        object: DeepPartial<BindBillableObjectMetadata>
    ): BindBillableObjectMetadata {
        const message = {
            ...baseBindBillableObjectMetadata,
        } as BindBillableObjectMetadata;
        if (
            object.billableObjectId !== undefined &&
            object.billableObjectId !== null
        ) {
            message.billableObjectId = object.billableObjectId;
        } else {
            message.billableObjectId = '';
        }
        return message;
    },
};

/** A set of methods for managing BillingAccount resources. */
export const BillingAccountServiceService = {
    /** Returns the specified billing account. */
    get: {
        path: '/yandex.cloud.billing.v1.BillingAccountService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: GetBillingAccountRequest) =>
            Buffer.from(GetBillingAccountRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            GetBillingAccountRequest.decode(value),
        responseSerialize: (value: BillingAccount) =>
            Buffer.from(BillingAccount.encode(value).finish()),
        responseDeserialize: (value: Buffer) => BillingAccount.decode(value),
    },
    /** Retrieves the list of billing accounts available for current user. */
    list: {
        path: '/yandex.cloud.billing.v1.BillingAccountService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListBillingAccountsRequest) =>
            Buffer.from(ListBillingAccountsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListBillingAccountsRequest.decode(value),
        responseSerialize: (value: ListBillingAccountsResponse) =>
            Buffer.from(ListBillingAccountsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListBillingAccountsResponse.decode(value),
    },
    /** Retrieves the list of billable object bindings associated with the specified billing account. */
    listBillableObjectBindings: {
        path: '/yandex.cloud.billing.v1.BillingAccountService/ListBillableObjectBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListBillableObjectBindingsRequest) =>
            Buffer.from(
                ListBillableObjectBindingsRequest.encode(value).finish()
            ),
        requestDeserialize: (value: Buffer) =>
            ListBillableObjectBindingsRequest.decode(value),
        responseSerialize: (value: ListBillableObjectBindingsResponse) =>
            Buffer.from(
                ListBillableObjectBindingsResponse.encode(value).finish()
            ),
        responseDeserialize: (value: Buffer) =>
            ListBillableObjectBindingsResponse.decode(value),
    },
    /** Binds billable object to the specified billing account. */
    bindBillableObject: {
        path: '/yandex.cloud.billing.v1.BillingAccountService/BindBillableObject',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: BindBillableObjectRequest) =>
            Buffer.from(BindBillableObjectRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            BindBillableObjectRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
    /** Lists access bindings for the specified billing account. */
    listAccessBindings: {
        path: '/yandex.cloud.billing.v1.BillingAccountService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: ListAccessBindingsRequest) =>
            Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            ListAccessBindingsRequest.decode(value),
        responseSerialize: (value: ListAccessBindingsResponse) =>
            Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value: Buffer) =>
            ListAccessBindingsResponse.decode(value),
    },
    /** Updates access bindings for the specified billing account. */
    updateAccessBindings: {
        path: '/yandex.cloud.billing.v1.BillingAccountService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value: UpdateAccessBindingsRequest) =>
            Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value: Buffer) =>
            UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value: Operation) =>
            Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value: Buffer) => Operation.decode(value),
    },
} as const;

export interface BillingAccountServiceServer
    extends UntypedServiceImplementation {
    /** Returns the specified billing account. */
    get: handleUnaryCall<GetBillingAccountRequest, BillingAccount>;
    /** Retrieves the list of billing accounts available for current user. */
    list: handleUnaryCall<
        ListBillingAccountsRequest,
        ListBillingAccountsResponse
    >;
    /** Retrieves the list of billable object bindings associated with the specified billing account. */
    listBillableObjectBindings: handleUnaryCall<
        ListBillableObjectBindingsRequest,
        ListBillableObjectBindingsResponse
    >;
    /** Binds billable object to the specified billing account. */
    bindBillableObject: handleUnaryCall<BindBillableObjectRequest, Operation>;
    /** Lists access bindings for the specified billing account. */
    listAccessBindings: handleUnaryCall<
        ListAccessBindingsRequest,
        ListAccessBindingsResponse
    >;
    /** Updates access bindings for the specified billing account. */
    updateAccessBindings: handleUnaryCall<
        UpdateAccessBindingsRequest,
        Operation
    >;
}

export interface BillingAccountServiceClient extends Client {
    /** Returns the specified billing account. */
    get(
        request: GetBillingAccountRequest,
        callback: (error: ServiceError | null, response: BillingAccount) => void
    ): ClientUnaryCall;
    get(
        request: GetBillingAccountRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: BillingAccount) => void
    ): ClientUnaryCall;
    get(
        request: GetBillingAccountRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: BillingAccount) => void
    ): ClientUnaryCall;
    /** Retrieves the list of billing accounts available for current user. */
    list(
        request: ListBillingAccountsRequest,
        callback: (
            error: ServiceError | null,
            response: ListBillingAccountsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListBillingAccountsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListBillingAccountsResponse
        ) => void
    ): ClientUnaryCall;
    list(
        request: ListBillingAccountsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListBillingAccountsResponse
        ) => void
    ): ClientUnaryCall;
    /** Retrieves the list of billable object bindings associated with the specified billing account. */
    listBillableObjectBindings(
        request: ListBillableObjectBindingsRequest,
        callback: (
            error: ServiceError | null,
            response: ListBillableObjectBindingsResponse
        ) => void
    ): ClientUnaryCall;
    listBillableObjectBindings(
        request: ListBillableObjectBindingsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListBillableObjectBindingsResponse
        ) => void
    ): ClientUnaryCall;
    listBillableObjectBindings(
        request: ListBillableObjectBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListBillableObjectBindingsResponse
        ) => void
    ): ClientUnaryCall;
    /** Binds billable object to the specified billing account. */
    bindBillableObject(
        request: BindBillableObjectRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    bindBillableObject(
        request: BindBillableObjectRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    bindBillableObject(
        request: BindBillableObjectRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    /** Lists access bindings for the specified billing account. */
    listAccessBindings(
        request: ListAccessBindingsRequest,
        callback: (
            error: ServiceError | null,
            response: ListAccessBindingsResponse
        ) => void
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        callback: (
            error: ServiceError | null,
            response: ListAccessBindingsResponse
        ) => void
    ): ClientUnaryCall;
    listAccessBindings(
        request: ListAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (
            error: ServiceError | null,
            response: ListAccessBindingsResponse
        ) => void
    ): ClientUnaryCall;
    /** Updates access bindings for the specified billing account. */
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
    updateAccessBindings(
        request: UpdateAccessBindingsRequest,
        metadata: Metadata,
        options: Partial<CallOptions>,
        callback: (error: ServiceError | null, response: Operation) => void
    ): ClientUnaryCall;
}

export const BillingAccountServiceClient = makeGenericClientConstructor(
    BillingAccountServiceService,
    'yandex.cloud.billing.v1.BillingAccountService'
) as unknown as {
    new (
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>
    ): BillingAccountServiceClient;
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