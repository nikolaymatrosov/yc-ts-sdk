/* eslint-disable */
import { Sku } from '../../../../yandex/cloud/billing/v1/sku';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.billing.v1';
const baseGetSkuRequest = {
    id: '',
    currency: '',
    billingAccountId: '',
};
export const GetSkuRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.currency !== '') {
            writer.uint32(18).string(message.currency);
        }
        if (message.billingAccountId !== '') {
            writer.uint32(26).string(message.billingAccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetSkuRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.currency = reader.string();
                    break;
                case 3:
                    message.billingAccountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetSkuRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.currency !== undefined && object.currency !== null) {
            message.currency = String(object.currency);
        }
        else {
            message.currency = '';
        }
        if (object.billingAccountId !== undefined &&
            object.billingAccountId !== null) {
            message.billingAccountId = String(object.billingAccountId);
        }
        else {
            message.billingAccountId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.currency !== undefined && (obj.currency = message.currency);
        message.billingAccountId !== undefined &&
            (obj.billingAccountId = message.billingAccountId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetSkuRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.currency !== undefined && object.currency !== null) {
            message.currency = object.currency;
        }
        else {
            message.currency = '';
        }
        if (object.billingAccountId !== undefined &&
            object.billingAccountId !== null) {
            message.billingAccountId = object.billingAccountId;
        }
        else {
            message.billingAccountId = '';
        }
        return message;
    },
};
const baseListSkusRequest = {
    currency: '',
    billingAccountId: '',
    filter: '',
    pageSize: 0,
    pageToken: '',
};
export const ListSkusRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.currency !== '') {
            writer.uint32(10).string(message.currency);
        }
        if (message.billingAccountId !== '') {
            writer.uint32(18).string(message.billingAccountId);
        }
        if (message.filter !== '') {
            writer.uint32(26).string(message.filter);
        }
        if (message.pageSize !== 0) {
            writer.uint32(32).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(42).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListSkusRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currency = reader.string();
                    break;
                case 2:
                    message.billingAccountId = reader.string();
                    break;
                case 3:
                    message.filter = reader.string();
                    break;
                case 4:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 5:
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
        const message = { ...baseListSkusRequest };
        if (object.currency !== undefined && object.currency !== null) {
            message.currency = String(object.currency);
        }
        else {
            message.currency = '';
        }
        if (object.billingAccountId !== undefined &&
            object.billingAccountId !== null) {
            message.billingAccountId = String(object.billingAccountId);
        }
        else {
            message.billingAccountId = '';
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = String(object.filter);
        }
        else {
            message.filter = '';
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
        message.currency !== undefined && (obj.currency = message.currency);
        message.billingAccountId !== undefined &&
            (obj.billingAccountId = message.billingAccountId);
        message.filter !== undefined && (obj.filter = message.filter);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListSkusRequest };
        if (object.currency !== undefined && object.currency !== null) {
            message.currency = object.currency;
        }
        else {
            message.currency = '';
        }
        if (object.billingAccountId !== undefined &&
            object.billingAccountId !== null) {
            message.billingAccountId = object.billingAccountId;
        }
        else {
            message.billingAccountId = '';
        }
        if (object.filter !== undefined && object.filter !== null) {
            message.filter = object.filter;
        }
        else {
            message.filter = '';
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
const baseListSkusResponse = { nextPageToken: '' };
export const ListSkusResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.skus) {
            Sku.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== '') {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListSkusResponse };
        message.skus = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.skus.push(Sku.decode(reader, reader.uint32()));
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
        const message = { ...baseListSkusResponse };
        message.skus = [];
        if (object.skus !== undefined && object.skus !== null) {
            for (const e of object.skus) {
                message.skus.push(Sku.fromJSON(e));
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
        if (message.skus) {
            obj.skus = message.skus.map((e) => (e ? Sku.toJSON(e) : undefined));
        }
        else {
            obj.skus = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListSkusResponse };
        message.skus = [];
        if (object.skus !== undefined && object.skus !== null) {
            for (const e of object.skus) {
                message.skus.push(Sku.fromPartial(e));
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
/** A set of methods for managing Sku resources. */
export const SkuServiceService = {
    /** Returns the specified SKU. */
    get: {
        path: '/yandex.cloud.billing.v1.SkuService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetSkuRequest.encode(value).finish()),
        requestDeserialize: (value) => GetSkuRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Sku.encode(value).finish()),
        responseDeserialize: (value) => Sku.decode(value),
    },
    /** Retrieves the list of SKUs. */
    list: {
        path: '/yandex.cloud.billing.v1.SkuService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListSkusRequest.encode(value).finish()),
        requestDeserialize: (value) => ListSkusRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListSkusResponse.encode(value).finish()),
        responseDeserialize: (value) => ListSkusResponse.decode(value),
    },
};
export const SkuServiceClient = makeGenericClientConstructor(SkuServiceService, 'yandex.cloud.billing.v1.SkuService');
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
