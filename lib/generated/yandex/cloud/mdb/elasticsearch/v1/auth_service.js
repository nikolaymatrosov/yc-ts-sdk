/* eslint-disable */
import { AuthProvider } from '../../../../../yandex/cloud/mdb/elasticsearch/v1/auth';
import { Operation } from '../../../../../yandex/cloud/operation/operation';
import { makeGenericClientConstructor, } from '@grpc/grpc-js';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'yandex.cloud.mdb.elasticsearch.v1';
const baseListAuthProvidersRequest = { clusterId: '' };
export const ListAuthProvidersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListAuthProvidersRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
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
            ...baseListAuthProvidersRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListAuthProvidersRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        return message;
    },
};
const baseListAuthProvidersResponse = {};
export const ListAuthProvidersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.providers) {
            AuthProvider.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseListAuthProvidersResponse,
        };
        message.providers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.providers.push(AuthProvider.decode(reader, reader.uint32()));
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
            ...baseListAuthProvidersResponse,
        };
        message.providers = [];
        if (object.providers !== undefined && object.providers !== null) {
            for (const e of object.providers) {
                message.providers.push(AuthProvider.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.providers) {
            obj.providers = message.providers.map((e) => e ? AuthProvider.toJSON(e) : undefined);
        }
        else {
            obj.providers = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseListAuthProvidersResponse,
        };
        message.providers = [];
        if (object.providers !== undefined && object.providers !== null) {
            for (const e of object.providers) {
                message.providers.push(AuthProvider.fromPartial(e));
            }
        }
        return message;
    },
};
const baseGetAuthProviderRequest = { clusterId: '', name: '' };
export const GetAuthProviderRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseGetAuthProviderRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
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
            ...baseGetAuthProviderRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseGetAuthProviderRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        return message;
    },
};
const baseAddAuthProvidersRequest = { clusterId: '' };
export const AddAuthProvidersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.providers) {
            AuthProvider.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddAuthProvidersRequest,
        };
        message.providers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.providers.push(AuthProvider.decode(reader, reader.uint32()));
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
            ...baseAddAuthProvidersRequest,
        };
        message.providers = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.providers !== undefined && object.providers !== null) {
            for (const e of object.providers) {
                message.providers.push(AuthProvider.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.providers) {
            obj.providers = message.providers.map((e) => e ? AuthProvider.toJSON(e) : undefined);
        }
        else {
            obj.providers = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAddAuthProvidersRequest,
        };
        message.providers = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.providers !== undefined && object.providers !== null) {
            for (const e of object.providers) {
                message.providers.push(AuthProvider.fromPartial(e));
            }
        }
        return message;
    },
};
const baseUpdateAuthProvidersRequest = { clusterId: '' };
export const UpdateAuthProvidersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.providers) {
            AuthProvider.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateAuthProvidersRequest,
        };
        message.providers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.providers.push(AuthProvider.decode(reader, reader.uint32()));
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
            ...baseUpdateAuthProvidersRequest,
        };
        message.providers = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.providers !== undefined && object.providers !== null) {
            for (const e of object.providers) {
                message.providers.push(AuthProvider.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.providers) {
            obj.providers = message.providers.map((e) => e ? AuthProvider.toJSON(e) : undefined);
        }
        else {
            obj.providers = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateAuthProvidersRequest,
        };
        message.providers = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.providers !== undefined && object.providers !== null) {
            for (const e of object.providers) {
                message.providers.push(AuthProvider.fromPartial(e));
            }
        }
        return message;
    },
};
const baseDeleteAuthProvidersRequest = {
    clusterId: '',
    providerNames: '',
};
export const DeleteAuthProvidersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.providerNames) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteAuthProvidersRequest,
        };
        message.providerNames = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.providerNames.push(reader.string());
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
            ...baseDeleteAuthProvidersRequest,
        };
        message.providerNames = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.providerNames !== undefined &&
            object.providerNames !== null) {
            for (const e of object.providerNames) {
                message.providerNames.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.providerNames) {
            obj.providerNames = message.providerNames.map((e) => e);
        }
        else {
            obj.providerNames = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteAuthProvidersRequest,
        };
        message.providerNames = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.providerNames !== undefined &&
            object.providerNames !== null) {
            for (const e of object.providerNames) {
                message.providerNames.push(e);
            }
        }
        return message;
    },
};
const baseUpdateAuthProviderRequest = { clusterId: '', name: '' };
export const UpdateAuthProviderRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.provider !== undefined) {
            AuthProvider.encode(message.provider, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateAuthProviderRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.provider = AuthProvider.decode(reader, reader.uint32());
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
            ...baseUpdateAuthProviderRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.provider !== undefined && object.provider !== null) {
            message.provider = AuthProvider.fromJSON(object.provider);
        }
        else {
            message.provider = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.name !== undefined && (obj.name = message.name);
        message.provider !== undefined &&
            (obj.provider = message.provider
                ? AuthProvider.toJSON(message.provider)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateAuthProviderRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.provider !== undefined && object.provider !== null) {
            message.provider = AuthProvider.fromPartial(object.provider);
        }
        else {
            message.provider = undefined;
        }
        return message;
    },
};
const baseDeleteAuthProviderRequest = { clusterId: '', name: '' };
export const DeleteAuthProviderRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteAuthProviderRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
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
            ...baseDeleteAuthProviderRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteAuthProviderRequest,
        };
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        return message;
    },
};
const baseAddAuthProvidersMetadata = { clusterId: '', names: '' };
export const AddAuthProvidersMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.names) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseAddAuthProvidersMetadata,
        };
        message.names = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.names.push(reader.string());
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
            ...baseAddAuthProvidersMetadata,
        };
        message.names = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.names !== undefined && object.names !== null) {
            for (const e of object.names) {
                message.names.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.names) {
            obj.names = message.names.map((e) => e);
        }
        else {
            obj.names = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseAddAuthProvidersMetadata,
        };
        message.names = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.names !== undefined && object.names !== null) {
            for (const e of object.names) {
                message.names.push(e);
            }
        }
        return message;
    },
};
const baseUpdateAuthProvidersMetadata = { clusterId: '', names: '' };
export const UpdateAuthProvidersMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.names) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseUpdateAuthProvidersMetadata,
        };
        message.names = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.names.push(reader.string());
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
            ...baseUpdateAuthProvidersMetadata,
        };
        message.names = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.names !== undefined && object.names !== null) {
            for (const e of object.names) {
                message.names.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.names) {
            obj.names = message.names.map((e) => e);
        }
        else {
            obj.names = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseUpdateAuthProvidersMetadata,
        };
        message.names = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.names !== undefined && object.names !== null) {
            for (const e of object.names) {
                message.names.push(e);
            }
        }
        return message;
    },
};
const baseDeleteAuthProvidersMetadata = { clusterId: '', names: '' };
export const DeleteAuthProvidersMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clusterId !== '') {
            writer.uint32(10).string(message.clusterId);
        }
        for (const v of message.names) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseDeleteAuthProvidersMetadata,
        };
        message.names = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clusterId = reader.string();
                    break;
                case 2:
                    message.names.push(reader.string());
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
            ...baseDeleteAuthProvidersMetadata,
        };
        message.names = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = String(object.clusterId);
        }
        else {
            message.clusterId = '';
        }
        if (object.names !== undefined && object.names !== null) {
            for (const e of object.names) {
                message.names.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.clusterId !== undefined && (obj.clusterId = message.clusterId);
        if (message.names) {
            obj.names = message.names.map((e) => e);
        }
        else {
            obj.names = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseDeleteAuthProvidersMetadata,
        };
        message.names = [];
        if (object.clusterId !== undefined && object.clusterId !== null) {
            message.clusterId = object.clusterId;
        }
        else {
            message.clusterId = '';
        }
        if (object.names !== undefined && object.names !== null) {
            for (const e of object.names) {
                message.names.push(e);
            }
        }
        return message;
    },
};
/** A set of methods for managing Elasticsearch Authentication resources. */
export const AuthServiceService = {
    /** Retrieves the list of registered auth providers for Elasticsearch cluster. */
    listProviders: {
        path: '/yandex.cloud.mdb.elasticsearch.v1.AuthService/ListProviders',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListAuthProvidersRequest.encode(value).finish()),
        requestDeserialize: (value) => ListAuthProvidersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListAuthProvidersResponse.encode(value).finish()),
        responseDeserialize: (value) => ListAuthProvidersResponse.decode(value),
    },
    /** Returns registered auth provider by name. */
    getProvider: {
        path: '/yandex.cloud.mdb.elasticsearch.v1.AuthService/GetProvider',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetAuthProviderRequest.encode(value).finish()),
        requestDeserialize: (value) => GetAuthProviderRequest.decode(value),
        responseSerialize: (value) => Buffer.from(AuthProvider.encode(value).finish()),
        responseDeserialize: (value) => AuthProvider.decode(value),
    },
    /** Adds new auth providers to Elasticsearch cluster. */
    addProviders: {
        path: '/yandex.cloud.mdb.elasticsearch.v1.AuthService/AddProviders',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(AddAuthProvidersRequest.encode(value).finish()),
        requestDeserialize: (value) => AddAuthProvidersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Replase the list of auth providers. */
    updateProviders: {
        path: '/yandex.cloud.mdb.elasticsearch.v1.AuthService/UpdateProviders',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateAuthProvidersRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateAuthProvidersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Removes auth providers from Elasticsearch cluster by name. */
    deleteProviders: {
        path: '/yandex.cloud.mdb.elasticsearch.v1.AuthService/DeleteProviders',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteAuthProvidersRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteAuthProvidersRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Updates registered auth provider. */
    updateProvider: {
        path: '/yandex.cloud.mdb.elasticsearch.v1.AuthService/UpdateProvider',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateAuthProviderRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateAuthProviderRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
    /** Removes auth provider from Elasticsearch cluster by name. */
    deleteProvider: {
        path: '/yandex.cloud.mdb.elasticsearch.v1.AuthService/DeleteProvider',
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteAuthProviderRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteAuthProviderRequest.decode(value),
        responseSerialize: (value) => Buffer.from(Operation.encode(value).finish()),
        responseDeserialize: (value) => Operation.decode(value),
    },
};
export const AuthServiceClient = makeGenericClientConstructor(AuthServiceService, 'yandex.cloud.mdb.elasticsearch.v1.AuthService');
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
