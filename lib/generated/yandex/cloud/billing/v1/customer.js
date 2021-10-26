/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.billing.v1';
const baseCustomer = { id: '', billingAccountId: '' };
export const Customer = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.billingAccountId !== '') {
            writer.uint32(18).string(message.billingAccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCustomer };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
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
        const message = { ...baseCustomer };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
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
        message.billingAccountId !== undefined &&
            (obj.billingAccountId = message.billingAccountId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCustomer };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
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
const baseCustomerPerson = {
    name: '',
    longname: '',
    phone: '',
    email: '',
    postCode: '',
    postAddress: '',
    legalAddress: '',
    tin: '',
};
export const CustomerPerson = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.longname !== '') {
            writer.uint32(18).string(message.longname);
        }
        if (message.phone !== '') {
            writer.uint32(26).string(message.phone);
        }
        if (message.email !== '') {
            writer.uint32(34).string(message.email);
        }
        if (message.postCode !== '') {
            writer.uint32(42).string(message.postCode);
        }
        if (message.postAddress !== '') {
            writer.uint32(50).string(message.postAddress);
        }
        if (message.legalAddress !== '') {
            writer.uint32(58).string(message.legalAddress);
        }
        if (message.tin !== '') {
            writer.uint32(66).string(message.tin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCustomerPerson };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.longname = reader.string();
                    break;
                case 3:
                    message.phone = reader.string();
                    break;
                case 4:
                    message.email = reader.string();
                    break;
                case 5:
                    message.postCode = reader.string();
                    break;
                case 6:
                    message.postAddress = reader.string();
                    break;
                case 7:
                    message.legalAddress = reader.string();
                    break;
                case 8:
                    message.tin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCustomerPerson };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.longname !== undefined && object.longname !== null) {
            message.longname = String(object.longname);
        }
        else {
            message.longname = '';
        }
        if (object.phone !== undefined && object.phone !== null) {
            message.phone = String(object.phone);
        }
        else {
            message.phone = '';
        }
        if (object.email !== undefined && object.email !== null) {
            message.email = String(object.email);
        }
        else {
            message.email = '';
        }
        if (object.postCode !== undefined && object.postCode !== null) {
            message.postCode = String(object.postCode);
        }
        else {
            message.postCode = '';
        }
        if (object.postAddress !== undefined && object.postAddress !== null) {
            message.postAddress = String(object.postAddress);
        }
        else {
            message.postAddress = '';
        }
        if (object.legalAddress !== undefined && object.legalAddress !== null) {
            message.legalAddress = String(object.legalAddress);
        }
        else {
            message.legalAddress = '';
        }
        if (object.tin !== undefined && object.tin !== null) {
            message.tin = String(object.tin);
        }
        else {
            message.tin = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.longname !== undefined && (obj.longname = message.longname);
        message.phone !== undefined && (obj.phone = message.phone);
        message.email !== undefined && (obj.email = message.email);
        message.postCode !== undefined && (obj.postCode = message.postCode);
        message.postAddress !== undefined &&
            (obj.postAddress = message.postAddress);
        message.legalAddress !== undefined &&
            (obj.legalAddress = message.legalAddress);
        message.tin !== undefined && (obj.tin = message.tin);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCustomerPerson };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.longname !== undefined && object.longname !== null) {
            message.longname = object.longname;
        }
        else {
            message.longname = '';
        }
        if (object.phone !== undefined && object.phone !== null) {
            message.phone = object.phone;
        }
        else {
            message.phone = '';
        }
        if (object.email !== undefined && object.email !== null) {
            message.email = object.email;
        }
        else {
            message.email = '';
        }
        if (object.postCode !== undefined && object.postCode !== null) {
            message.postCode = object.postCode;
        }
        else {
            message.postCode = '';
        }
        if (object.postAddress !== undefined && object.postAddress !== null) {
            message.postAddress = object.postAddress;
        }
        else {
            message.postAddress = '';
        }
        if (object.legalAddress !== undefined && object.legalAddress !== null) {
            message.legalAddress = object.legalAddress;
        }
        else {
            message.legalAddress = '';
        }
        if (object.tin !== undefined && object.tin !== null) {
            message.tin = object.tin;
        }
        else {
            message.tin = '';
        }
        return message;
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
