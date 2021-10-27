"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IamTokenServiceClient = exports.IamTokenServiceService = exports.CreateIamTokenForServiceAccountRequest = exports.CreateIamTokenResponse = exports.CreateIamTokenRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const grpc_js_1 = require("@grpc/grpc-js");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'yandex.cloud.iam.v1';
const baseCreateIamTokenRequest = {};
exports.CreateIamTokenRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.yandexPassportOauthToken !== undefined) {
            writer.uint32(10).string(message.yandexPassportOauthToken);
        }
        if (message.jwt !== undefined) {
            writer.uint32(18).string(message.jwt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateIamTokenRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.yandexPassportOauthToken = reader.string();
                    break;
                case 2:
                    message.jwt = reader.string();
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
            ...baseCreateIamTokenRequest,
        };
        if (object.yandexPassportOauthToken !== undefined &&
            object.yandexPassportOauthToken !== null) {
            message.yandexPassportOauthToken = String(object.yandexPassportOauthToken);
        }
        else {
            message.yandexPassportOauthToken = undefined;
        }
        if (object.jwt !== undefined && object.jwt !== null) {
            message.jwt = String(object.jwt);
        }
        else {
            message.jwt = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.yandexPassportOauthToken !== undefined &&
            (obj.yandexPassportOauthToken = message.yandexPassportOauthToken);
        message.jwt !== undefined && (obj.jwt = message.jwt);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateIamTokenRequest,
        };
        if (object.yandexPassportOauthToken !== undefined &&
            object.yandexPassportOauthToken !== null) {
            message.yandexPassportOauthToken = object.yandexPassportOauthToken;
        }
        else {
            message.yandexPassportOauthToken = undefined;
        }
        if (object.jwt !== undefined && object.jwt !== null) {
            message.jwt = object.jwt;
        }
        else {
            message.jwt = undefined;
        }
        return message;
    },
};
const baseCreateIamTokenResponse = { iamToken: '' };
exports.CreateIamTokenResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.iamToken !== '') {
            writer.uint32(10).string(message.iamToken);
        }
        if (message.expiresAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.expiresAt), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateIamTokenResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iamToken = reader.string();
                    break;
                case 2:
                    message.expiresAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            ...baseCreateIamTokenResponse,
        };
        if (object.iamToken !== undefined && object.iamToken !== null) {
            message.iamToken = String(object.iamToken);
        }
        else {
            message.iamToken = '';
        }
        if (object.expiresAt !== undefined && object.expiresAt !== null) {
            message.expiresAt = fromJsonTimestamp(object.expiresAt);
        }
        else {
            message.expiresAt = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.iamToken !== undefined && (obj.iamToken = message.iamToken);
        message.expiresAt !== undefined &&
            (obj.expiresAt = message.expiresAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateIamTokenResponse,
        };
        if (object.iamToken !== undefined && object.iamToken !== null) {
            message.iamToken = object.iamToken;
        }
        else {
            message.iamToken = '';
        }
        if (object.expiresAt !== undefined && object.expiresAt !== null) {
            message.expiresAt = object.expiresAt;
        }
        else {
            message.expiresAt = undefined;
        }
        return message;
    },
};
const baseCreateIamTokenForServiceAccountRequest = {
    serviceAccountId: '',
};
exports.CreateIamTokenForServiceAccountRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.serviceAccountId !== '') {
            writer.uint32(10).string(message.serviceAccountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCreateIamTokenForServiceAccountRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.serviceAccountId = reader.string();
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
            ...baseCreateIamTokenForServiceAccountRequest,
        };
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = String(object.serviceAccountId);
        }
        else {
            message.serviceAccountId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.serviceAccountId !== undefined &&
            (obj.serviceAccountId = message.serviceAccountId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseCreateIamTokenForServiceAccountRequest,
        };
        if (object.serviceAccountId !== undefined &&
            object.serviceAccountId !== null) {
            message.serviceAccountId = object.serviceAccountId;
        }
        else {
            message.serviceAccountId = '';
        }
        return message;
    },
};
/** A set of methods for managing IAM tokens. */
exports.IamTokenServiceService = {
    /** Creates an IAM token for the specified identity. */
    create: {
        path: '/yandex.cloud.iam.v1.IamTokenService/Create',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateIamTokenRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateIamTokenRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CreateIamTokenResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.CreateIamTokenResponse.decode(value),
    },
    /** Create iam token for service account. */
    createForServiceAccount: {
        path: '/yandex.cloud.iam.v1.IamTokenService/CreateForServiceAccount',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateIamTokenForServiceAccountRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateIamTokenForServiceAccountRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CreateIamTokenResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.CreateIamTokenResponse.decode(value),
    },
};
exports.IamTokenServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.IamTokenServiceService, 'yandex.cloud.iam.v1.IamTokenService');
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === 'string') {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
