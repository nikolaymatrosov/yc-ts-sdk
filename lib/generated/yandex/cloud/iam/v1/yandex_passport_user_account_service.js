/* eslint-disable */
import { UserAccount } from '../../../../yandex/cloud/iam/v1/user_account';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.iam.v1';
const baseGetUserAccountByLoginRequest = { login: '' };
export const GetUserAccountByLoginRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.login !== '') {
            writer.uint32(10).string(message.login);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetUserAccountByLoginRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.login = reader.string();
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
            ...baseGetUserAccountByLoginRequest,
        };
        if (object.login !== undefined && object.login !== null) {
            message.login = String(object.login);
        }
        else {
            message.login = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.login !== undefined && (obj.login = message.login);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetUserAccountByLoginRequest,
        };
        if (object.login !== undefined && object.login !== null) {
            message.login = object.login;
        }
        else {
            message.login = '';
        }
        return message;
    },
};
/** A set of methods for managing YandexPassportUserAccount resources. */
export const YandexPassportUserAccountServiceService = {
    /** Returns the specified YandexPassportUserAccount resource. */
    getByLogin: {
        path: '/yandex.cloud.iam.v1.YandexPassportUserAccountService/GetByLogin',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetUserAccountByLoginRequest.encode(value).finish()),
        requestDeserialize: (value) => GetUserAccountByLoginRequest.decode(value),
        responseSerialize: (value) => Buffer.from(UserAccount.encode(value).finish()),
        responseDeserialize: (value) => UserAccount.decode(value),
    },
};
export const YandexPassportUserAccountServiceClient = makeGenericClientConstructor(YandexPassportUserAccountServiceService, 'yandex.cloud.iam.v1.YandexPassportUserAccountService');
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
