/* eslint-disable */
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.certificatemanager.v1';
const baseGetCertificateContentResponse = {
    certificateId: '',
    certificateChain: '',
    privateKey: '',
};
export const GetCertificateContentResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        for (const v of message.certificateChain) {
            writer.uint32(26).string(v);
        }
        if (message.privateKey !== '') {
            writer.uint32(34).string(message.privateKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetCertificateContentResponse,
        };
        message.certificateChain = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
                    break;
                case 3:
                    message.certificateChain.push(reader.string());
                    break;
                case 4:
                    message.privateKey = reader.string();
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
            ...baseGetCertificateContentResponse,
        };
        message.certificateChain = [];
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = String(object.certificateId);
        }
        else {
            message.certificateId = '';
        }
        if (object.certificateChain !== undefined &&
            object.certificateChain !== null) {
            for (const e of object.certificateChain) {
                message.certificateChain.push(String(e));
            }
        }
        if (object.privateKey !== undefined && object.privateKey !== null) {
            message.privateKey = String(object.privateKey);
        }
        else {
            message.privateKey = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        if (message.certificateChain) {
            obj.certificateChain = message.certificateChain.map((e) => e);
        }
        else {
            obj.certificateChain = [];
        }
        message.privateKey !== undefined &&
            (obj.privateKey = message.privateKey);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetCertificateContentResponse,
        };
        message.certificateChain = [];
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = object.certificateId;
        }
        else {
            message.certificateId = '';
        }
        if (object.certificateChain !== undefined &&
            object.certificateChain !== null) {
            for (const e of object.certificateChain) {
                message.certificateChain.push(e);
            }
        }
        if (object.privateKey !== undefined && object.privateKey !== null) {
            message.privateKey = object.privateKey;
        }
        else {
            message.privateKey = '';
        }
        return message;
    },
};
const baseGetCertificateContentRequest = { certificateId: '' };
export const GetCertificateContentRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.certificateId !== '') {
            writer.uint32(10).string(message.certificateId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetCertificateContentRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
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
            ...baseGetCertificateContentRequest,
        };
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = String(object.certificateId);
        }
        else {
            message.certificateId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetCertificateContentRequest,
        };
        if (object.certificateId !== undefined &&
            object.certificateId !== null) {
            message.certificateId = object.certificateId;
        }
        else {
            message.certificateId = '';
        }
        return message;
    },
};
/** A set of methods for managing certificate content. */
export const CertificateContentServiceService = {
    /** Returns chain and private key of the specified certificate. */
    get: {
        path: '/yandex.cloud.certificatemanager.v1.CertificateContentService/Get',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetCertificateContentRequest.encode(value).finish()),
        requestDeserialize: (value) => GetCertificateContentRequest.decode(value),
        responseSerialize: (value) => Buffer.from(GetCertificateContentResponse.encode(value).finish()),
        responseDeserialize: (value) => GetCertificateContentResponse.decode(value),
    },
};
export const CertificateContentServiceClient = makeGenericClientConstructor(CertificateContentServiceService, 'yandex.cloud.certificatemanager.v1.CertificateContentService');
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
