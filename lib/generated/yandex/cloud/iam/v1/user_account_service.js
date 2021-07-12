/* eslint-disable */
import { UserAccount } from '../../../../yandex/cloud/iam/v1/user_account';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.iam.v1';
const baseGetUserAccountRequest = { userAccountId: '' };
export const GetUserAccountRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.userAccountId !== '') {
            writer.uint32(10).string(message.userAccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetUserAccountRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userAccountId = reader.string();
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
            ...baseGetUserAccountRequest,
        };
        if (object.userAccountId !== undefined &&
            object.userAccountId !== null) {
            message.userAccountId = String(object.userAccountId);
        }
        else {
            message.userAccountId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.userAccountId !== undefined &&
            (obj.userAccountId = message.userAccountId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetUserAccountRequest,
        };
        if (object.userAccountId !== undefined &&
            object.userAccountId !== null) {
            message.userAccountId = object.userAccountId;
        }
        else {
            message.userAccountId = '';
        }
        return message;
    },
};
/** A set of methods for managing user accounts. Currently applicable only for [Yandex.Passport accounts](/docs/iam/concepts/#passport). */
export const UserAccountServiceService = {
    /** Returns the specified UserAccount resource. */
    get: {
        path: '/yandex.cloud.iam.v1.UserAccountService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetUserAccountRequest.encode(value).finish()),
        requestDeserialize: (value) => GetUserAccountRequest.decode(value),
        responseSerialize: (value) => Buffer.from(UserAccount.encode(value).finish()),
        responseDeserialize: (value) => UserAccount.decode(value),
    },
};
export const UserAccountServiceClient = makeGenericClientConstructor(UserAccountServiceService, 'yandex.cloud.iam.v1.UserAccountService');
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
