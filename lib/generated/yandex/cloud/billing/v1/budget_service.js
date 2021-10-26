/* eslint-disable */
import { Budget, CostBudgetSpec, ExpenseBudgetSpec, BalanceBudgetSpec, } from '../../../../yandex/cloud/billing/v1/budget';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.billing.v1';
const baseGetBudgetRequest = { id: '' };
export const GetBudgetRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetBudgetRequest };
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
        const message = { ...baseGetBudgetRequest };
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
        const message = { ...baseGetBudgetRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        return message;
    },
};
const baseListBudgetsRequest = {
    billingAccountId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListBudgetsRequest = {
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
        const message = { ...baseListBudgetsRequest };
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
        const message = { ...baseListBudgetsRequest };
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
        const message = { ...baseListBudgetsRequest };
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
const baseListBudgetsResponse = { nextPageToken: '' };
export const ListBudgetsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.budgets) {
            Budget.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListBudgetsResponse };
        message.budgets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.budgets.push(Budget.decode(reader, reader.uint32()));
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
        const message = { ...baseListBudgetsResponse };
        message.budgets = [];
        if (object.budgets !== undefined && object.budgets !== null) {
            for (const e of object.budgets) {
                message.budgets.push(Budget.fromJSON(e));
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
        if (message.budgets) {
            obj.budgets = message.budgets.map((e) => e ? Budget.toJSON(e) : undefined);
        }
        else {
            obj.budgets = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListBudgetsResponse };
        message.budgets = [];
        if (object.budgets !== undefined && object.budgets !== null) {
            for (const e of object.budgets) {
                message.budgets.push(Budget.fromPartial(e));
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
const baseCreateBudgetRequest = { billingAccountId: '', name: '' };
export const CreateBudgetRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.billingAccountId !== '') {
            writer.uint32(10).string(message.billingAccountId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.costBudgetSpec !== undefined) {
            CostBudgetSpec.encode(message.costBudgetSpec, writer.uint32(26).fork()).ldelim();
        }
        if (message.expenseBudgetSpec !== undefined) {
            ExpenseBudgetSpec.encode(message.expenseBudgetSpec, writer.uint32(34).fork()).ldelim();
        }
        if (message.balanceBudgetSpec !== undefined) {
            BalanceBudgetSpec.encode(message.balanceBudgetSpec, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateBudgetRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.billingAccountId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.costBudgetSpec = CostBudgetSpec.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.expenseBudgetSpec = ExpenseBudgetSpec.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.balanceBudgetSpec = BalanceBudgetSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateBudgetRequest };
        if (object.billingAccountId !== undefined &&
            object.billingAccountId !== null) {
            message.billingAccountId = String(object.billingAccountId);
        }
        else {
            message.billingAccountId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.costBudgetSpec !== undefined &&
            object.costBudgetSpec !== null) {
            message.costBudgetSpec = CostBudgetSpec.fromJSON(object.costBudgetSpec);
        }
        else {
            message.costBudgetSpec = undefined;
        }
        if (object.expenseBudgetSpec !== undefined &&
            object.expenseBudgetSpec !== null) {
            message.expenseBudgetSpec = ExpenseBudgetSpec.fromJSON(object.expenseBudgetSpec);
        }
        else {
            message.expenseBudgetSpec = undefined;
        }
        if (object.balanceBudgetSpec !== undefined &&
            object.balanceBudgetSpec !== null) {
            message.balanceBudgetSpec = BalanceBudgetSpec.fromJSON(object.balanceBudgetSpec);
        }
        else {
            message.balanceBudgetSpec = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.billingAccountId !== undefined &&
            (obj.billingAccountId = message.billingAccountId);
        message.name !== undefined && (obj.name = message.name);
        message.costBudgetSpec !== undefined &&
            (obj.costBudgetSpec = message.costBudgetSpec
                ? CostBudgetSpec.toJSON(message.costBudgetSpec)
                : undefined);
        message.expenseBudgetSpec !== undefined &&
            (obj.expenseBudgetSpec = message.expenseBudgetSpec
                ? ExpenseBudgetSpec.toJSON(message.expenseBudgetSpec)
                : undefined);
        message.balanceBudgetSpec !== undefined &&
            (obj.balanceBudgetSpec = message.balanceBudgetSpec
                ? BalanceBudgetSpec.toJSON(message.balanceBudgetSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateBudgetRequest };
        if (object.billingAccountId !== undefined &&
            object.billingAccountId !== null) {
            message.billingAccountId = object.billingAccountId;
        }
        else {
            message.billingAccountId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.costBudgetSpec !== undefined &&
            object.costBudgetSpec !== null) {
            message.costBudgetSpec = CostBudgetSpec.fromPartial(object.costBudgetSpec);
        }
        else {
            message.costBudgetSpec = undefined;
        }
        if (object.expenseBudgetSpec !== undefined &&
            object.expenseBudgetSpec !== null) {
            message.expenseBudgetSpec = ExpenseBudgetSpec.fromPartial(object.expenseBudgetSpec);
        }
        else {
            message.expenseBudgetSpec = undefined;
        }
        if (object.balanceBudgetSpec !== undefined &&
            object.balanceBudgetSpec !== null) {
            message.balanceBudgetSpec = BalanceBudgetSpec.fromPartial(object.balanceBudgetSpec);
        }
        else {
            message.balanceBudgetSpec = undefined;
        }
        return message;
    },
};
const baseCreateBudgetMetadata = { budgetId: '' };
export const CreateBudgetMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.budgetId !== '') {
            writer.uint32(10).string(message.budgetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreateBudgetMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.budgetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCreateBudgetMetadata };
        if (object.budgetId !== undefined && object.budgetId !== null) {
            message.budgetId = String(object.budgetId);
        }
        else {
            message.budgetId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.budgetId !== undefined && (obj.budgetId = message.budgetId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreateBudgetMetadata };
        if (object.budgetId !== undefined && object.budgetId !== null) {
            message.budgetId = object.budgetId;
        }
        else {
            message.budgetId = '';
        }
        return message;
    },
};
/** A set of methods for managing Budget resources. */
export const BudgetServiceService = {
    /** Returns the specified budget. */
    get: {
        path: '/yandex.cloud.billing.v1.BudgetService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetBudgetRequest.encode(value).finish()),
        requestDeserialize: (value) => GetBudgetRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Budget.encode(value).finish()),
        responseDeserialize: (value) => Budget.decode(value),
    },
    /** Retrieves the list of budgets corresponding to the specified billing account. */
    list: {
        path: '/yandex.cloud.billing.v1.BudgetService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListBudgetsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListBudgetsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListBudgetsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListBudgetsResponse.decode(value),
    },
    /** Creates a budget for the specified billing account. */
    create: {
        path: '/yandex.cloud.billing.v1.BudgetService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateBudgetRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateBudgetRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
};
export const BudgetServiceClient = makeGenericClientConstructor(BudgetServiceService, 'yandex.cloud.billing.v1.BudgetService');
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
