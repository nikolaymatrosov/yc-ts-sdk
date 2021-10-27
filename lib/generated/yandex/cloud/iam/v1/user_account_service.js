"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccountServiceClient = exports.UserAccountServiceService = exports.GetUserAccountRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const user_account_1 = require("../../../../yandex/cloud/iam/v1/user_account");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.iam.v1';
const baseGetUserAccountRequest = { userAccountId: '' };
exports.GetUserAccountRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userAccountId !== '') {
            writer.uint32(10).string(message.userAccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
exports.UserAccountServiceService = {
    /** Returns the specified UserAccount resource. */
    get: {
        path: '/yandex.cloud.iam.v1.UserAccountService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetUserAccountRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetUserAccountRequest.decode(value),
        responseSerialize: (value) => Buffer.from(user_account_1.UserAccount.encode(value).finish()),
        responseDeserialize: (value) => user_account_1.UserAccount.decode(value),
    },
};
exports.UserAccountServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.UserAccountServiceService, 'yandex.cloud.iam.v1.UserAccountService');
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
