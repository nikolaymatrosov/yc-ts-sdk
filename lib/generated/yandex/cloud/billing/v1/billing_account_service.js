"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingAccountServiceClient = exports.BillingAccountServiceService = exports.BindBillableObjectMetadata = exports.BindBillableObjectRequest = exports.ListBillableObjectBindingsResponse = exports.ListBillableObjectBindingsRequest = exports.ListBillingAccountsResponse = exports.ListBillingAccountsRequest = exports.GetBillingAccountRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const access_1 = require("../../../../yandex/cloud/access/access");
const billable_object_1 = require("../../../../yandex/cloud/billing/v1/billable_object");
const billing_account_1 = require("../../../../yandex/cloud/billing/v1/billing_account");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.billing.v1';
const baseGetBillingAccountRequest = {
    $type: 'yandex.cloud.billing.v1.GetBillingAccountRequest',
    id: '',
};
exports.GetBillingAccountRequest = {
    $type: 'yandex.cloud.billing.v1.GetBillingAccountRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.GetBillingAccountRequest.$type, exports.GetBillingAccountRequest);
const baseListBillingAccountsRequest = {
    $type: 'yandex.cloud.billing.v1.ListBillingAccountsRequest',
    pageSize: 0,
    pageToken: '',
};
exports.ListBillingAccountsRequest = {
    $type: 'yandex.cloud.billing.v1.ListBillingAccountsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.ListBillingAccountsRequest.$type, exports.ListBillingAccountsRequest);
const baseListBillingAccountsResponse = {
    $type: 'yandex.cloud.billing.v1.ListBillingAccountsResponse',
    nextPageToken: '',
};
exports.ListBillingAccountsResponse = {
    $type: 'yandex.cloud.billing.v1.ListBillingAccountsResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.billingAccounts) {
            billing_account_1.BillingAccount.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListBillingAccountsResponse,
        };
        message.billingAccounts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.billingAccounts.push(billing_account_1.BillingAccount.decode(reader, reader.uint32()));
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
                message.billingAccounts.push(billing_account_1.BillingAccount.fromJSON(e));
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
            obj.billingAccounts = message.billingAccounts.map((e) => e ? billing_account_1.BillingAccount.toJSON(e) : undefined);
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
                message.billingAccounts.push(billing_account_1.BillingAccount.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListBillingAccountsResponse.$type, exports.ListBillingAccountsResponse);
const baseListBillableObjectBindingsRequest = {
    $type: 'yandex.cloud.billing.v1.ListBillableObjectBindingsRequest',
    billingAccountId: '',
    pageSize: 0,
    pageToken: '',
};
exports.ListBillableObjectBindingsRequest = {
    $type: 'yandex.cloud.billing.v1.ListBillableObjectBindingsRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.ListBillableObjectBindingsRequest.$type, exports.ListBillableObjectBindingsRequest);
const baseListBillableObjectBindingsResponse = {
    $type: 'yandex.cloud.billing.v1.ListBillableObjectBindingsResponse',
    nextPageToken: '',
};
exports.ListBillableObjectBindingsResponse = {
    $type: 'yandex.cloud.billing.v1.ListBillableObjectBindingsResponse',
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.billableObjectBindings) {
            billable_object_1.BillableObjectBinding.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListBillableObjectBindingsResponse,
        };
        message.billableObjectBindings = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.billableObjectBindings.push(billable_object_1.BillableObjectBinding.decode(reader, reader.uint32()));
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
                message.billableObjectBindings.push(billable_object_1.BillableObjectBinding.fromJSON(e));
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
            obj.billableObjectBindings = message.billableObjectBindings.map((e) => (e ? billable_object_1.BillableObjectBinding.toJSON(e) : undefined));
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
                message.billableObjectBindings.push(billable_object_1.BillableObjectBinding.fromPartial(e));
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
typeRegistry_1.messageTypeRegistry.set(exports.ListBillableObjectBindingsResponse.$type, exports.ListBillableObjectBindingsResponse);
const baseBindBillableObjectRequest = {
    $type: 'yandex.cloud.billing.v1.BindBillableObjectRequest',
    billingAccountId: '',
};
exports.BindBillableObjectRequest = {
    $type: 'yandex.cloud.billing.v1.BindBillableObjectRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.billingAccountId !== '') {
            writer.uint32(10).string(message.billingAccountId);
        }
        if (message.billableObject !== undefined) {
            billable_object_1.BillableObject.encode(message.billableObject, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                    message.billableObject = billable_object_1.BillableObject.decode(reader, reader.uint32());
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
            message.billableObject = billable_object_1.BillableObject.fromJSON(object.billableObject);
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
                ? billable_object_1.BillableObject.toJSON(message.billableObject)
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
            message.billableObject = billable_object_1.BillableObject.fromPartial(object.billableObject);
        }
        else {
            message.billableObject = undefined;
        }
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.BindBillableObjectRequest.$type, exports.BindBillableObjectRequest);
const baseBindBillableObjectMetadata = {
    $type: 'yandex.cloud.billing.v1.BindBillableObjectMetadata',
    billableObjectId: '',
};
exports.BindBillableObjectMetadata = {
    $type: 'yandex.cloud.billing.v1.BindBillableObjectMetadata',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.billableObjectId !== '') {
            writer.uint32(10).string(message.billableObjectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.BindBillableObjectMetadata.$type, exports.BindBillableObjectMetadata);
/** A set of methods for managing BillingAccount resources. */
exports.BillingAccountServiceService = {
    /** Returns the specified billing account. */
    get: {
        path: '/yandex.cloud.billing.v1.BillingAccountService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetBillingAccountRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetBillingAccountRequest.decode(value),
        responseSerialize: (value) => Buffer.from(billing_account_1.BillingAccount.encode(value).finish()),
        responseDeserialize: (value) => billing_account_1.BillingAccount.decode(value),
    },
    /** Retrieves the list of billing accounts available for current user. */
    list: {
        path: '/yandex.cloud.billing.v1.BillingAccountService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListBillingAccountsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListBillingAccountsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListBillingAccountsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListBillingAccountsResponse.decode(value),
    },
    /** Retrieves the list of billable object bindings associated with the specified billing account. */
    listBillableObjectBindings: {
        path: '/yandex.cloud.billing.v1.BillingAccountService/ListBillableObjectBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListBillableObjectBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListBillableObjectBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListBillableObjectBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListBillableObjectBindingsResponse.decode(value),
    },
    /** Binds billable object to the specified billing account. */
    bindBillableObject: {
        path: '/yandex.cloud.billing.v1.BillingAccountService/BindBillableObject',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.BindBillableObjectRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.BindBillableObjectRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists access bindings for the specified billing account. */
    listAccessBindings: {
        path: '/yandex.cloud.billing.v1.BillingAccountService/ListAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Updates access bindings for the specified billing account. */
    updateAccessBindings: {
        path: '/yandex.cloud.billing.v1.BillingAccountService/UpdateAccessBindings',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.BillingAccountServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.BillingAccountServiceService, 'yandex.cloud.billing.v1.BillingAccountService');
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
