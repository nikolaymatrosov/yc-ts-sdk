/* eslint-disable */
import { Payload } from '../../../../yandex/cloud/lockbox/v1/payload';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.lockbox.v1';
const baseGetPayloadRequest = { secretId: '', versionId: '' };
export const GetPayloadRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.secretId !== '') {
            writer.uint32(10).string(message.secretId);
        }
        if (message.versionId !== '') {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGetPayloadRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secretId = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGetPayloadRequest };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = String(object.secretId);
        }
        else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.secretId !== undefined && (obj.secretId = message.secretId);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGetPayloadRequest };
        if (object.secretId !== undefined && object.secretId !== null) {
            message.secretId = object.secretId;
        }
        else {
            message.secretId = '';
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        }
        else {
            message.versionId = '';
        }
        return message;
    },
};
/** Set of methods to access payload of secrets. */
export const PayloadServiceService = {
    /**
     * Returns the payload of the specified secret.
     *
     * To get the list of all available secrets, make a [SecretService.List] request.
     */
    get: {
        path: '/yandex.cloud.lockbox.v1.PayloadService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetPayloadRequest.encode(value).finish()),
        requestDeserialize: (value) => GetPayloadRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Payload.encode(value).finish()),
        responseDeserialize: (value) => Payload.decode(value),
    },
};
export const PayloadServiceClient = makeGenericClientConstructor(PayloadServiceService, 'yandex.cloud.lockbox.v1.PayloadService');
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
