/* eslint-disable */
import { ListAccessBindingsRequest, ListAccessBindingsResponse, UpdateAccessBindingsRequest, } from '../../../../yandex/cloud/access/access';
import { BillableObjectBinding, BillableObject, } from '../../../../yandex/cloud/billing/v1/billable_object';
import { BillingAccount } from '../../../../yandex/cloud/billing/v1/billing_account';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.billing.v1';
const baseGetBillingAccountRequest = { id: '' };
export const GetBillingAccountRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetBillingAccountRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseGetBillingAccountRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetBillingAccountRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        return message;
    },
};
const baseListBillingAccountsRequest = { pageSize: 0, pageToken: '' };
export const ListBillingAccountsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListBillingAccountsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.pageSize = longToNumber(reader.int64());
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
    fromJSON(object) {
        const message = {
            ...baseListBillingAccountsRequest,
        };
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = Number(object.pageSize);
        }
        else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = String(object.pageToken);
        }
        else {
            message.pageToken = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListBillingAccountsRequest,
        };
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = object.pageSize;
        }
        else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = object.pageToken;
        }
        else {
            message.pageToken = '';
        }
        return message;
    },
};
const baseListBillingAccountsResponse = { nextPageToken: '' };
export const ListBillingAccountsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.billingAccounts) {
            BillingAccount.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListBillingAccountsResponse,
        };
        message.billingAccounts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.billingAccounts.push(BillingAccount.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        const message = {
            ...baseListBillingAccountsResponse,
        };
        message.billingAccounts = [];
        if (object.billingAccounts !== undefined &&
            object.billingAccounts !== null) {
            for (const e of object.billingAccounts) {
                message.billingAccounts.push(BillingAccount.fromJSON(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = String(object.nextPageToken);
        }
        else {
            message.nextPageToken = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.billingAccounts) {
            obj.billingAccounts = message.billingAccounts.map((e) => e ? BillingAccount.toJSON(e) : undefined);
        }
        else {
            obj.billingAccounts = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListBillingAccountsResponse,
        };
        message.billingAccounts = [];
        if (object.billingAccounts !== undefined &&
            object.billingAccounts !== null) {
            for (const e of object.billingAccounts) {
                message.billingAccounts.push(BillingAccount.fromPartial(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = object.nextPageToken;
        }
        else {
            message.nextPageToken = '';
        }
        return message;
    },
};
const baseListBillableObjectBindingsRequest = {
    billingAccountId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListBillableObjectBindingsRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListBillableObjectBindingsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.billingAccountId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
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
    fromJSON(object) {
        const message = {
            ...baseListBillableObjectBindingsRequest,
        };
        if (object.billingAccountId !== undefined &&
            object.billingAccountId !== null) {
            message.billingAccountId = String(object.billingAccountId);
        }
        else {
            message.billingAccountId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = Number(object.pageSize);
        }
        else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = String(object.pageToken);
        }
        else {
            message.pageToken = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.billingAccountId !== undefined &&
            (obj.billingAccountId = message.billingAccountId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListBillableObjectBindingsRequest,
        };
        if (object.billingAccountId !== undefined &&
            object.billingAccountId !== null) {
            message.billingAccountId = object.billingAccountId;
        }
        else {
            message.billingAccountId = '';
        }
        if (object.pageSize !== undefined && object.pageSize !== null) {
            message.pageSize = object.pageSize;
        }
        else {
            message.pageSize = 0;
        }
        if (object.pageToken !== undefined && object.pageToken !== null) {
            message.pageToken = object.pageToken;
        }
        else {
            message.pageToken = '';
        }
        return message;
    },
};
const baseListBillableObjectBindingsResponse = { nextPageToken: '' };
export const ListBillableObjectBindingsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.billableObjectBindings) {
            BillableObjectBinding.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListBillableObjectBindingsResponse,
        };
        message.billableObjectBindings = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.billableObjectBindings.push(BillableObjectBinding.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        const message = {
            ...baseListBillableObjectBindingsResponse,
        };
        message.billableObjectBindings = [];
        if (object.billableObjectBindings !== undefined &&
            object.billableObjectBindings !== null) {
            for (const e of object.billableObjectBindings) {
                message.billableObjectBindings.push(BillableObjectBinding.fromJSON(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = String(object.nextPageToken);
        }
        else {
            message.nextPageToken = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.billableObjectBindings) {
            obj.billableObjectBindings = message.billableObjectBindings.map((e) => (e ? BillableObjectBinding.toJSON(e) : undefined));
        }
        else {
            obj.billableObjectBindings = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListBillableObjectBindingsResponse,
        };
        message.billableObjectBindings = [];
        if (object.billableObjectBindings !== undefined &&
            object.billableObjectBindings !== null) {
            for (const e of object.billableObjectBindings) {
                message.billableObjectBindings.push(BillableObjectBinding.fromPartial(e));
            }
        }
        if (object.nextPageToken !== undefined &&
            object.nextPageToken !== null) {
            message.nextPageToken = object.nextPageToken;
        }
        else {
            message.nextPageToken = '';
        }
        return message;
    },
};
const baseBindBillableObjectRequest = { billingAccountId: '' };
export const BindBillableObjectRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.billingAccountId !== '') {
            writer.uint32(10).string(message.billingAccountId);
        }
        if (message.billableObject !== undefined) {
            BillableObject.encode(message.billableObject, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseBindBillableObjectRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.billingAccountId = reader.string();
                    break;
                case 2:
                    message.billableObject = BillableObject.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseBindBillableObjectRequest,
        };
        if (object.billingAccountId !== undefined &&
            object.billingAccountId !== null) {
            message.billingAccountId = String(object.billingAccountId);
        }
        else {
            message.billingAccountId = '';
        }
        if (object.billableObject !== undefined &&
            object.billableObject !== null) {
            message.billableObject = BillableObject.fromJSON(object.billableObject);
        }
        else {
            message.billableObject = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.billingAccountId !== undefined &&
            (obj.billingAccountId = message.billingAccountId);
        message.billableObject !== undefined &&
            (obj.billableObject = message.billableObject
                ? BillableObject.toJSON(message.billableObject)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseBindBillableObjectRequest,
        };
        if (object.billingAccountId !== undefined &&
            object.billingAccountId !== null) {
            message.billingAccountId = object.billingAccountId;
        }
        else {
            message.billingAccountId = '';
        }
        if (object.billableObject !== undefined &&
            object.billableObject !== null) {
            message.billableObject = BillableObject.fromPartial(object.billableObject);
        }
        else {
            message.billableObject = undefined;
        }
        return message;
    },
};
const baseBindBillableObjectMetadata = { billableObjectId: '' };
export const BindBillableObjectMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.billableObjectId !== '') {
            writer.uint32(10).string(message.billableObjectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseBindBillableObjectMetadata,
        };
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
    fromJSON(object) {
        const message = {
            ...baseBindBillableObjectMetadata,
        };
        if (object.billableObjectId !== undefined &&
            object.billableObjectId !== null) {
            message.billableObjectId = String(object.billableObjectId);
        }
        else {
            message.billableObjectId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.billableObjectId !== undefined &&
            (obj.billableObjectId = message.billableObjectId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseBindBillableObjectMetadata,
        };
        if (object.billableObjectId !== undefined &&
            object.billableObjectId !== null) {
            message.billableObjectId = object.billableObjectId;
        }
        else {
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
        requestSerialize: (value) => Buffer.from(GetBillingAccountRequest.encode(value).finish()),
        requestDeserialize: (value) => GetBillingAccountRequest.decode(value),
        responseSerialize: (value) => Buffer.from(BillingAccount.encode(value).finish()),
        responseDeserialize: (value) => BillingAccount.decode(value),
    },
    /** Retrieves the list of billing accounts available for current user. */
    list: {
        path: '/yandex.cloud.billing.v1.BillingAccountService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListBillingAccountsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListBillingAccountsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListBillingAccountsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListBillingAccountsResponse.decode(value),
    },
    /** Retrieves the list of billable object bindings associated with the specified billing account. */
    listBillableObjectBindings: {
        path: '/yandex.cloud.billing.v1.BillingAccountService/ListBillableObjectBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListBillableObjectBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListBillableObjectBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListBillableObjectBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListBillableObjectBindingsResponse.decode(value),
    },
    /** Binds billable object to the specified billing account. */
    bindBillableObject: {
        path: '/yandex.cloud.billing.v1.BillingAccountService/BindBillableObject',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(BindBillableObjectRequest.encode(value).finish()),
        requestDeserialize: (value) => BindBillableObjectRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Lists access bindings for the specified billing account. */
    listAccessBindings: {
        path: '/yandex.cloud.billing.v1.BillingAccountService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListAccessBindingsResponse.decode(value),
    },
    /** Updates access bindings for the specified billing account. */
    updateAccessBindings: {
        path: '/yandex.cloud.billing.v1.BillingAccountService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
};
export const BillingAccountServiceClient = makeGenericClientConstructor(BillingAccountServiceService, 'yandex.cloud.billing.v1.BillingAccountService');
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
