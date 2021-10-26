/* eslint-disable */
import { Operation } from '../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.cdn.v1';
const baseActivateProviderRequest = { folderId: '', providerType: '' };
export const ActivateProviderRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        if (message.providerType !== '') {
            writer.uint32(18).string(message.providerType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseActivateProviderRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.providerType = reader.string();
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
            ...baseActivateProviderRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        if (object.providerType !== undefined && object.providerType !== null) {
            message.providerType = String(object.providerType);
        }
        else {
            message.providerType = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.providerType !== undefined &&
            (obj.providerType = message.providerType);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseActivateProviderRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        if (object.providerType !== undefined && object.providerType !== null) {
            message.providerType = object.providerType;
        }
        else {
            message.providerType = '';
        }
        return message;
    },
};
const baseActivateProviderMetadata = { folderId: '' };
export const ActivateProviderMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseActivateProviderMetadata,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
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
            ...baseActivateProviderMetadata,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseActivateProviderMetadata,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        return message;
    },
};
const baseListActivatedProvidersRequest = { folderId: '' };
export const ListActivatedProvidersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.folderId !== '') {
            writer.uint32(10).string(message.folderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListActivatedProvidersRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
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
            ...baseListActivatedProvidersRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = String(object.folderId);
        }
        else {
            message.folderId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListActivatedProvidersRequest,
        };
        if (object.folderId !== undefined && object.folderId !== null) {
            message.folderId = object.folderId;
        }
        else {
            message.folderId = '';
        }
        return message;
    },
};
const baseListActivatedProvidersResponse = { providers: '' };
export const ListActivatedProvidersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.providers) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListActivatedProvidersResponse,
        };
        message.providers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.providers.push(reader.string());
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
            ...baseListActivatedProvidersResponse,
        };
        message.providers = [];
        if (object.providers !== undefined && object.providers !== null) {
            for (const e of object.providers) {
                message.providers.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.providers) {
            obj.providers = message.providers.map((e) => e);
        }
        else {
            obj.providers = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListActivatedProvidersResponse,
        };
        message.providers = [];
        if (object.providers !== undefined && object.providers !== null) {
            for (const e of object.providers) {
                message.providers.push(e);
            }
        }
        return message;
    },
};
/** A set of methods for managing Provider Service resources. */
export const ProviderServiceService = {
    /** Activate provider for specified client. */
    activate: {
        path: '/yandex.cloud.cdn.v1.ProviderService/Activate',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ActivateProviderRequest.encode(value).finish()),
        requestDeserialize: (value) => ActivateProviderRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** List activated providers for specified client. */
    listActivated: {
        path: '/yandex.cloud.cdn.v1.ProviderService/ListActivated',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListActivatedProvidersRequest.encode(value).finish()),
        requestDeserialize: (value) => ListActivatedProvidersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListActivatedProvidersResponse.encode(value).finish()),
        responseDeserialize: (value) => ListActivatedProvidersResponse.decode(value),
    },
};
export const ProviderServiceClient = makeGenericClientConstructor(ProviderServiceService, 'yandex.cloud.cdn.v1.ProviderService');
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
