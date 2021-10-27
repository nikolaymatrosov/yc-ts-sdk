"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YandexPassportUserAccountServiceClient = exports.YandexPassportUserAccountServiceService = exports.GetUserAccountByLoginRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const user_account_1 = require("../../../../yandex/cloud/iam/v1/user_account");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.iam.v1';
const baseGetUserAccountByLoginRequest = {
    $type: 'yandex.cloud.iam.v1.GetUserAccountByLoginRequest',
    login: '',
};
exports.GetUserAccountByLoginRequest = {
    $type: 'yandex.cloud.iam.v1.GetUserAccountByLoginRequest',
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.login !== '') {
            writer.uint32(10).string(message.login);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
typeRegistry_1.messageTypeRegistry.set(exports.GetUserAccountByLoginRequest.$type, exports.GetUserAccountByLoginRequest);
/** A set of methods for managing YandexPassportUserAccount resources. */
exports.YandexPassportUserAccountServiceService = {
    /** Returns the specified YandexPassportUserAccount resource. */
    getByLogin: {
        path: '/yandex.cloud.iam.v1.YandexPassportUserAccountService/GetByLogin',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetUserAccountByLoginRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetUserAccountByLoginRequest.decode(value),
        responseSerialize: (value) => Buffer.from(user_account_1.UserAccount.encode(value).finish()),
        responseDeserialize: (value) => user_account_1.UserAccount.decode(value),
    },
};
exports.YandexPassportUserAccountServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.YandexPassportUserAccountServiceService, 'yandex.cloud.iam.v1.YandexPassportUserAccountService');
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
