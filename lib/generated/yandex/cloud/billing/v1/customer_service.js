/* eslint-disable */
import { Customer, CustomerPerson, } from '../../../../yandex/cloud/billing/v1/customer';
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.billing.v1';
const baseListCustomersRequest = {
    resellerId: '',
    pageSize: 0,
    pageToken: '',
};
export const ListCustomersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resellerId !== '') {
            writer.uint32(10).string(message.resellerId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(24).int64(message.pageSize);
        }
        if (message.pageToken !== '') {
            writer.uint32(34).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListCustomersRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resellerId = reader.string();
                    break;
                case 3:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 4:
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
        const message = { ...baseListCustomersRequest };
        if (object.resellerId !== undefined && object.resellerId !== null) {
            message.resellerId = String(object.resellerId);
        }
        else {
            message.resellerId = '';
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
        message.resellerId !== undefined &&
            (obj.resellerId = message.resellerId);
        message.pageSize !== undefined && (obj.pageSize = message.pageSize);
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListCustomersRequest };
        if (object.resellerId !== undefined && object.resellerId !== null) {
            message.resellerId = object.resellerId;
        }
        else {
            message.resellerId = '';
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
const baseListCustomersResponse = { nextPageToken: '' };
export const ListCustomersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.customers) {
            Customer.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseListCustomersResponse,
        };
        message.customers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.customers.push(Customer.decode(reader, reader.uint32()));
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
            ...baseListCustomersResponse,
        };
        message.customers = [];
        if (object.customers !== undefined && object.customers !== null) {
            for (const e of object.customers) {
                message.customers.push(Customer.fromJSON(e));
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
        if (message.customers) {
            obj.customers = message.customers.map((e) => e ? Customer.toJSON(e) : undefined);
        }
        else {
            obj.customers = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListCustomersResponse,
        };
        message.customers = [];
        if (object.customers !== undefined && object.customers !== null) {
            for (const e of object.customers) {
                message.customers.push(Customer.fromPartial(e));
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
const baseInviteCustomerRequest = {
    resellerId: '',
    name: '',
    invitationEmail: '',
};
export const InviteCustomerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resellerId !== '') {
            writer.uint32(10).string(message.resellerId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.invitationEmail !== '') {
            writer.uint32(26).string(message.invitationEmail);
        }
        if (message.person !== undefined) {
            CustomerPerson.encode(message.person, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseInviteCustomerRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resellerId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.invitationEmail = reader.string();
                    break;
                case 4:
                    message.person = CustomerPerson.decode(reader, reader.uint32());
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
            ...baseInviteCustomerRequest,
        };
        if (object.resellerId !== undefined && object.resellerId !== null) {
            message.resellerId = String(object.resellerId);
        }
        else {
            message.resellerId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.invitationEmail !== undefined &&
            object.invitationEmail !== null) {
            message.invitationEmail = String(object.invitationEmail);
        }
        else {
            message.invitationEmail = '';
        }
        if (object.person !== undefined && object.person !== null) {
            message.person = CustomerPerson.fromJSON(object.person);
        }
        else {
            message.person = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resellerId !== undefined &&
            (obj.resellerId = message.resellerId);
        message.name !== undefined && (obj.name = message.name);
        message.invitationEmail !== undefined &&
            (obj.invitationEmail = message.invitationEmail);
        message.person !== undefined &&
            (obj.person = message.person
                ? CustomerPerson.toJSON(message.person)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseInviteCustomerRequest,
        };
        if (object.resellerId !== undefined && object.resellerId !== null) {
            message.resellerId = object.resellerId;
        }
        else {
            message.resellerId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.invitationEmail !== undefined &&
            object.invitationEmail !== null) {
            message.invitationEmail = object.invitationEmail;
        }
        else {
            message.invitationEmail = '';
        }
        if (object.person !== undefined && object.person !== null) {
            message.person = CustomerPerson.fromPartial(object.person);
        }
        else {
            message.person = undefined;
        }
        return message;
    },
};
const baseActivateCustomerRequest = { customerId: '' };
export const ActivateCustomerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.customerId !== '') {
            writer.uint32(10).string(message.customerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseActivateCustomerRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.customerId = reader.string();
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
            ...baseActivateCustomerRequest,
        };
        if (object.customerId !== undefined && object.customerId !== null) {
            message.customerId = String(object.customerId);
        }
        else {
            message.customerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.customerId !== undefined &&
            (obj.customerId = message.customerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseActivateCustomerRequest,
        };
        if (object.customerId !== undefined && object.customerId !== null) {
            message.customerId = object.customerId;
        }
        else {
            message.customerId = '';
        }
        return message;
    },
};
const baseSuspendCustomerRequest = { customerId: '' };
export const SuspendCustomerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.customerId !== '') {
            writer.uint32(10).string(message.customerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSuspendCustomerRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.customerId = reader.string();
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
            ...baseSuspendCustomerRequest,
        };
        if (object.customerId !== undefined && object.customerId !== null) {
            message.customerId = String(object.customerId);
        }
        else {
            message.customerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.customerId !== undefined &&
            (obj.customerId = message.customerId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSuspendCustomerRequest,
        };
        if (object.customerId !== undefined && object.customerId !== null) {
            message.customerId = object.customerId;
        }
        else {
            message.customerId = '';
        }
        return message;
    },
};
const baseCustomerMetadata = { resellerId: '', customerId: '' };
export const CustomerMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resellerId !== '') {
            writer.uint32(10).string(message.resellerId);
        }
        if (message.customerId !== '') {
            writer.uint32(18).string(message.customerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCustomerMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resellerId = reader.string();
                    break;
                case 2:
                    message.customerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCustomerMetadata };
        if (object.resellerId !== undefined && object.resellerId !== null) {
            message.resellerId = String(object.resellerId);
        }
        else {
            message.resellerId = '';
        }
        if (object.customerId !== undefined && object.customerId !== null) {
            message.customerId = String(object.customerId);
        }
        else {
            message.customerId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resellerId !== undefined &&
            (obj.resellerId = message.resellerId);
        message.customerId !== undefined &&
            (obj.customerId = message.customerId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCustomerMetadata };
        if (object.resellerId !== undefined && object.resellerId !== null) {
            message.resellerId = object.resellerId;
        }
        else {
            message.resellerId = '';
        }
        if (object.customerId !== undefined && object.customerId !== null) {
            message.customerId = object.customerId;
        }
        else {
            message.customerId = '';
        }
        return message;
    },
};
/** A set of methods for managing Customer resources. */
export const CustomerServiceService = {
    /** Retrieves the list of customers associated with the specified reseller. */
    list: {
        path: '/yandex.cloud.billing.v1.CustomerService/List',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListCustomersRequest.encode(value).finish()),
        requestDeserialize: (value) => ListCustomersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListCustomersResponse.encode(value).finish()),
        responseDeserialize: (value) => ListCustomersResponse.decode(value),
    },
    /** Invites customer to the specified reseller. */
    invite: {
        path: '/yandex.cloud.billing.v1.CustomerService/Invite',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(InviteCustomerRequest.encode(value).finish()),
        requestDeserialize: (value) => InviteCustomerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Activates specified customer. After customer is activated, he can use resources associated with his billing account. */
    activate: {
        path: '/yandex.cloud.billing.v1.CustomerService/Activate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ActivateCustomerRequest.encode(value).finish()),
        requestDeserialize: (value) => ActivateCustomerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Suspend specified customer. After customer is suspended, he can't use resources associated with his billing account. */
    suspend: {
        path: '/yandex.cloud.billing.v1.CustomerService/Suspend',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SuspendCustomerRequest.encode(value).finish()),
        requestDeserialize: (value) => SuspendCustomerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
};
export const CustomerServiceClient = makeGenericClientConstructor(CustomerServiceService, 'yandex.cloud.billing.v1.CustomerService');
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
