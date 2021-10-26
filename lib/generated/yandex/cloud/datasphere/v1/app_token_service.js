/* eslint-disable */
import { Empty } from '../../../../google/protobuf/empty';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.datasphere.v1';
const baseAppTokenValidateRequest = { token: '' };
export const AppTokenValidateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.token !== '') {
            writer.uint32(10).string(message.token);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAppTokenValidateRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
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
            ...baseAppTokenValidateRequest,
        };
        if (object.token !== undefined && object.token !== null) {
            message.token = String(object.token);
        }
        else {
            message.token = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.token !== undefined && (obj.token = message.token);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAppTokenValidateRequest,
        };
        if (object.token !== undefined && object.token !== null) {
            message.token = object.token;
        }
        else {
            message.token = '';
        }
        return message;
    },
};
/** A set of methods for managing app tokens. */
export const AppTokenServiceService = {
    /** Validates app token. */
    validate: {
        path: '/yandex.cloud.datasphere.v1.AppTokenService/Validate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(AppTokenValidateRequest.encode(value).finish()),
        requestDeserialize: (value) => AppTokenValidateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Empty.encode(value).finish()),
        responseDeserialize: (value) => Empty.decode(value),
    },
};
export const AppTokenServiceClient = makeGenericClientConstructor(AppTokenServiceService, 'yandex.cloud.datasphere.v1.AppTokenService');
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
